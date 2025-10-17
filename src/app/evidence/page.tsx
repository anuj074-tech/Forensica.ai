'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { FilePlus, Filter, Library, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Evidence } from '@/lib/types';

// Helper to convert file to base64
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export default function EvidencePage() {
  const [evidenceItems, setEvidenceItems] = useState<Evidence[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvidenceImage, setNewEvidenceImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewEvidenceImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  
  const handleAddEvidence = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (title && description && newEvidenceImage) {
      const imageUrl = await toBase64(newEvidenceImage);
      const newEvidence: Evidence = {
        id: `evidence-${Date.now()}`,
        type: 'image',
        title,
        description,
        timestamp: new Date().toISOString(),
        imageUrl: imageUrl,
        imageHint: "custom evidence",
      };
      setEvidenceItems(prev => [...prev, newEvidence]);
      setIsDialogOpen(false);
      setNewEvidenceImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div>
      <PageHeader
        title="Evidence Locker"
        description="Browse and manage all collected evidence for the current case."
      >
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            <FilePlus className="mr-2 h-4 w-4" /> Add Evidence
          </Button>
        </div>
      </PageHeader>

      {evidenceItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {evidenceItems.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <div className="relative aspect-video">
                  <Image src={item.imageUrl} alt={item.title} fill className="rounded-t-lg object-cover" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="mt-1 text-sm">
                  {new Date(item.timestamp).toLocaleString()}
                </CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mt-6">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-12 text-center">
            <div className="rounded-full border border-dashed p-4">
              <Library className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardTitle>No Evidence Logged</CardTitle>
            <CardDescription>
              Click "Add Evidence" to start logging items for this case.
            </CardDescription>
            <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
              <FilePlus className="mr-2 h-4 w-4" /> Add Your First Item
            </Button>
          </CardContent>
        </Card>
      )}
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Evidence</DialogTitle>
            <DialogDescription>
              Fill out the details for the new piece of evidence.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddEvidence}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" name="title" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea id="description" name="description" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <div className="col-span-3">
                  {imagePreview ? (
                     <div className="relative">
                       <Image src={imagePreview} alt="Image preview" width={100} height={100} className="rounded-md object-cover"/>
                       <Button variant="ghost" size="icon" className="absolute top-0 right-0" onClick={() => { setImagePreview(null); setNewEvidenceImage(null);}}>
                         <X className="h-4 w-4"/>
                       </Button>
                     </div>
                  ) : (
                    <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Add Evidence</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}