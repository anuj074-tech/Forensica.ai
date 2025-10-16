(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/common/main-header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainHeader": (()=>MainHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
;
;
function MainHeader({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTrigger"], {
                className: "flex md:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/common/main-header.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-headline text-xl font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/common/main-header.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/main-header.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MainHeader;
var _c;
__turbopack_context__.k.register(_c, "MainHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:30ce2d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b6f19be3538c4b7b408a0e8719241a732d252bbe":"analyzeWitnessStatements"},"src/ai/flows/analyze-witness-statements.ts",""] */ __turbopack_context__.s({
    "analyzeWitnessStatements": (()=>analyzeWitnessStatements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var analyzeWitnessStatements = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b6f19be3538c4b7b408a0e8719241a732d252bbe", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeWitnessStatements"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5hbHl6ZS13aXRuZXNzLXN0YXRlbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSBmbG93IGZvciB0cmFuc2NyaWJpbmcgYW5kIGFuYWx5emluZyB3aXRuZXNzIHN0YXRlbWVudHMgdG8gaWRlbnRpZnkga2V5IGVudGl0aWVzLFxuICogY29udHJhZGljdGlvbnMsIGFuZCBwb3RlbnRpYWwgZGVjZXB0aW9uLlxuICpcbiAqIC0gYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzIC0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGFuYWx5c2lzIG9mIHdpdG5lc3Mgc3RhdGVtZW50cy5cbiAqIC0gQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGFuYWx5emVXaXRuZXNzU3RhdGVtZW50cyBmdW5jdGlvbi5cbiAqIC0gQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN0YXRlbWVudDogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZSgnVGhlIHdpdG5lc3Mgc3RhdGVtZW50IHRvIGJlIGFuYWx5emVkLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIEFuYWx5emVXaXRuZXNzU3RhdGVtZW50c0lucHV0U2NoZW1hPjtcblxuY29uc3QgQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBlbnRpdGllczogei5hcnJheShcbiAgICB6LnN0cmluZygpLmRlc2NyaWJlKCdLZXkgZW50aXRpZXMgaWRlbnRpZmllZCBpbiB0aGUgd2l0bmVzcyBzdGF0ZW1lbnQuJylcbiAgKS5kZXNjcmliZSgnQSBsaXN0IG9mIGtleSBlbnRpdGllcyBpZGVudGlmaWVkIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKSxcbiAgY29udHJhZGljdGlvbnM6IHouYXJyYXkoXG4gICAgei5zdHJpbmcoKS5kZXNjcmliZSgnUG90ZW50aWFsIGNvbnRyYWRpY3Rpb25zIGZvdW5kIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKVxuICApLmRlc2NyaWJlKCdBIGxpc3Qgb2YgcG90ZW50aWFsIGNvbnRyYWRpY3Rpb25zIGZvdW5kIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKSxcbiAgZGVjZXB0aW9uU2NvcmU6IHpcbiAgICAubnVtYmVyKClcbiAgICAuZGVzY3JpYmUoJ0Egc2NvcmUgaW5kaWNhdGluZyB0aGUgbGlrZWxpaG9vZCBvZiBkZWNlcHRpb24gaW4gdGhlIHdpdG5lc3Mgc3RhdGVtZW50LicpLFxuICBzdW1tYXJ5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIHN1bW1hcnkgb2YgdGhlIHdpdG5lc3Mgc3RhdGVtZW50LicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzKFxuICBpbnB1dDogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRcbik6IFByb21pc2U8QW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0PiB7XG4gIHJldHVybiBhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93KGlucHV0KTtcbn1cblxuY29uc3QgYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2FuYWx5emVXaXRuZXNzU3RhdGVtZW50c1Byb21wdCcsXG4gIGlucHV0OiB7c2NoZW1hOiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBBSSBleHBlcnQgaW4gYW5hbHl6aW5nIHdpdG5lc3Mgc3RhdGVtZW50cyBpbiBjcmltaW5hbCBpbnZlc3RpZ2F0aW9ucy5cblxuICBZb3VyIHRhc2sgaXMgdG8gYW5hbHl6ZSB0aGUgcHJvdmlkZWQgd2l0bmVzcyBzdGF0ZW1lbnQsIGlkZW50aWZ5IGtleSBlbnRpdGllcywgZGV0ZWN0IHBvdGVudGlhbCBjb250cmFkaWN0aW9ucywgYW5kIGFzc2VzcyB0aGUgbGlrZWxpaG9vZCBvZiBkZWNlcHRpb24uXG5cbiAgU3RhdGVtZW50OiB7e3tzdGF0ZW1lbnR9fX1cblxuICBPdXRwdXQ6XG4gIC0gZW50aXRpZXM6IEEgbGlzdCBvZiBrZXkgZW50aXRpZXMgKHBlcnNvbnMsIHBsYWNlcywgdGhpbmdzKSBtZW50aW9uZWQgaW4gdGhlIHN0YXRlbWVudC5cbiAgLSBjb250cmFkaWN0aW9uczogQW55IGluY29uc2lzdGVuY2llcyBvciBjb250cmFkaWN0aW9ucyB3aXRoaW4gdGhlIHN0YXRlbWVudCBpdHNlbGYgb3IgY29tcGFyZWQgdG8gY29tbW9uIHNlbnNlLlxuICAtIGRlY2VwdGlvblNjb3JlOiBBIG51bWVyaWNhbCBzY29yZSAoMC0xLCB3aGVyZSAxIGlzIG1vc3QgbGlrZWx5IHRvIGJlIGxpZXMpIGluZGljYXRpbmcgdGhlIHByb2JhYmlsaXR5IG9mIGRlY2VwdGlvbiBpbiB0aGUgc3RhdGVtZW50IGJhc2VkIG9uIGxpbmd1aXN0aWMgY3VlcyBhbmQgaW5jb25zaXN0ZW5jaWVzLlxuICAtIHN1bW1hcnk6IEEgY29uY2lzZSBzdW1tYXJ5IG9mIHRoZSB3aXRuZXNzIHN0YXRlbWVudC5cbiAgUGxlYXNlIGZvcm1hdCB5b3VyIG91dHB1dCBhcyBhIEpTT04gb2JqZWN0LlxuYCxcbn0pO1xuXG5jb25zdCBhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICdhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGFuYWx5emVXaXRuZXNzU3RhdGVtZW50c1Byb21wdChpbnB1dCk7XG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRUQW1Dc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:ad46e7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40e38856acb4991c435853407fb1dcecfb030c0dd4":"detectIdentifyObjects"},"src/ai/flows/detect-identify-objects.ts",""] */ __turbopack_context__.s({
    "detectIdentifyObjects": (()=>detectIdentifyObjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var detectIdentifyObjects = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e38856acb4991c435853407fb1dcecfb030c0dd4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "detectIdentifyObjects"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGV0ZWN0LWlkZW50aWZ5LW9iamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgYSBHZW5raXQgZmxvdyBmb3IgZGV0ZWN0aW5nIGFuZCBpZGVudGlmeWluZyBvYmplY3RzIGluIGNyaW1lIHNjZW5lIGltYWdlcy5cbiAqXG4gKiBUaGUgZmxvdyB0YWtlcyBhbiBpbWFnZSBhcyBpbnB1dCBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgaWRlbnRpZmllZCBvYmplY3RzIHdpdGggdGhlaXIgZGVzY3JpcHRpb25zLlxuICogLSBkZXRlY3RJZGVudGlmeU9iamVjdHMgLSBUaGUgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgdGhlIGltYWdlIGFuZCByZXR1cm5zIGlkZW50aWZpZWQgb2JqZWN0cy5cbiAqIC0gRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGRldGVjdElkZW50aWZ5T2JqZWN0cyBmdW5jdGlvbi5cbiAqIC0gRGV0ZWN0SWRlbnRpZnlPYmplY3RzT3V0cHV0IC0gVGhlIG91dHB1dCB0eXBlIGZvciB0aGUgZGV0ZWN0SWRlbnRpZnlPYmplY3RzIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBob3RvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgICdBIHBob3RvIG9mIHRoZSBjcmltZSBzY2VuZSwgYXMgYSBkYXRhIFVSSSB0aGF0IG11c3QgaW5jbHVkZSBhIE1JTUUgdHlwZSBhbmQgdXNlIEJhc2U2NCBlbmNvZGluZy4gRXhwZWN0ZWQgZm9ybWF0OiBcXCdkYXRhOjxtaW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+XFwnLicgICAgKSxcbn0pO1xuZXhwb3J0IHR5cGUgRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBEZXRlY3RJZGVudGlmeU9iamVjdHNJbnB1dFNjaGVtYT47XG5cbmNvbnN0IERldGVjdGVkT2JqZWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgaWRlbnRpZmllZCBuYW1lIG9mIHRoZSBvYmplY3QuJyksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIGRlc2NyaXB0aW9uIG9mIHRoZSBvYmplY3QgYW5kIGl0cyBwb3RlbnRpYWwgcmVsZXZhbmNlIHRvIHRoZSBjcmltZSBzY2VuZS4nKSxcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5kZXNjcmliZSgnVGhlIGNvbmZpZGVuY2UgbGV2ZWwgb2YgdGhlIG9iamVjdCBpZGVudGlmaWNhdGlvbiAoMC0xKS4nKSxcbn0pO1xuXG5jb25zdCBEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXRTY2hlbWEgPSB6LmFycmF5KERldGVjdGVkT2JqZWN0U2NoZW1hKTtcbmV4cG9ydCB0eXBlIERldGVjdElkZW50aWZ5T2JqZWN0c091dHB1dCA9IHouaW5mZXI8dHlwZW9mIERldGVjdElkZW50aWZ5T2JqZWN0c091dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXRlY3RJZGVudGlmeU9iamVjdHMoaW5wdXQ6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0KTogUHJvbWlzZTxEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXQ+IHtcbiAgcmV0dXJuIGRldGVjdElkZW50aWZ5T2JqZWN0c0Zsb3coaW5wdXQpO1xufVxuXG5jb25zdCBkZXRlY3RJZGVudGlmeU9iamVjdHNQcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xuICBuYW1lOiAnZGV0ZWN0SWRlbnRpZnlPYmplY3RzUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIGFuIGV4cGVydCBpbiBjcmltZSBzY2VuZSBpbnZlc3RpZ2F0aW9uIGFuZCBvYmplY3QgcmVjb2duaXRpb24uXG4gIFlvdXIgdGFzayBpcyB0byBhbmFseXplIHRoZSBpbWFnZSBvZiBhIGNyaW1lIHNjZW5lIGFuZCBpZGVudGlmeSBwb3RlbnRpYWwgb2JqZWN0cyBvZiBpbnRlcmVzdCB0aGF0IGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlLlxuICBQcm92aWRlIGEgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgZWFjaCBvYmplY3QgYW5kIGl0cyBwb3RlbnRpYWwgcmVsZXZhbmNlIHRvIHRoZSBpbnZlc3RpZ2F0aW9uLlxuICBBbHNvLCBwcm92aWRlIHRoZSBjb25maWRlbmNlIGxldmVsICgwLTEpIGZvciBlYWNoIG9iamVjdCBpZGVudGlmaWVkLlxuXG4gIEFuYWx5emUgdGhlIGZvbGxvd2luZyBpbWFnZToge3ttZWRpYSB1cmw9cGhvdG9EYXRhVXJpfX1cblxuICBGb3JtYXQgeW91ciByZXNwb25zZSBhcyBhIEpTT04gYXJyYXkgb2Ygb2JqZWN0cywgd2hlcmUgZWFjaCBvYmplY3QgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgLSBuYW1lOiBUaGUgaWRlbnRpZmllZCBuYW1lIG9mIHRoZSBvYmplY3QuXG4gIC0gZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIG9iamVjdCBhbmQgaXRzIHBvdGVudGlhbCByZWxldmFuY2UgdG8gdGhlIGNyaW1lIHNjZW5lLlxuICAtIGNvbmZpZGVuY2U6IFRoZSBjb25maWRlbmNlIGxldmVsIG9mIHRoZSBvYmplY3QgaWRlbnRpZmljYXRpb24gKDAtMSkuXG4gIGAsXG59KTtcblxuY29uc3QgZGV0ZWN0SWRlbnRpZnlPYmplY3RzRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZGV0ZWN0SWRlbnRpZnlPYmplY3RzRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogRGV0ZWN0SWRlbnRpZnlPYmplY3RzT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBkZXRlY3RJZGVudGlmeU9iamVjdHNQcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEErQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:c35fb0 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402f10b134f6bd81ada28c535fb73da092f617bb83":"analyzeBloodstainPatterns"},"src/ai/flows/analyze-bloodstain-patterns.ts",""] */ __turbopack_context__.s({
    "analyzeBloodstainPatterns": (()=>analyzeBloodstainPatterns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var analyzeBloodstainPatterns = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402f10b134f6bd81ada28c535fb73da092f617bb83", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeBloodstainPatterns"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5hbHl6ZS1ibG9vZHN0YWluLXBhdHRlcm5zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9haS9mbG93cy9hbmFseXplLWJsb29kc3RhaW4tcGF0dGVybnMudHNcbid1c2Ugc2VydmVyJztcbi8qKlxuICogQGZpbGVPdmVydmlldyBBbmFseXplcyBibG9vZHN0YWluIHBhdHRlcm5zIGluIGltYWdlcyB0byBpbmZlciB3ZWFwb24gdHlwZXMgYW5kIHRyYWplY3Rvcmllcy5cbiAqXG4gKiAtIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnMgLSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuIGFuYWx5c2lzIHByb2Nlc3MuXG4gKiAtIEFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgYW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJucyBmdW5jdGlvbi5cbiAqIC0gQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc091dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnMgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBob3RvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiQSBwaG90byBvZiBhIGJsb29kc3RhaW4gcGF0dGVybiwgYXMgYSBkYXRhIFVSSSB0aGF0IG11c3QgaW5jbHVkZSBhIE1JTUUgdHlwZSBhbmQgdXNlIEJhc2U2NCBlbmNvZGluZy4gRXhwZWN0ZWQgZm9ybWF0OiAnZGF0YTo8bWltZXR5cGU+O2Jhc2U2NCw8ZW5jb2RlZF9kYXRhPicuXCJcbiAgICApLFxuICBhZGRpdGlvbmFsQ29udGV4dDogelxuICAgIC5zdHJpbmcoKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmRlc2NyaWJlKCdBZGRpdGlvbmFsIGNvbnRleHQgYWJvdXQgdGhlIGNyaW1lIHNjZW5lLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWE+O1xuXG5jb25zdCBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB3ZWFwb25UeXBlOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgcHJvYmFibGUgdHlwZSBvZiB3ZWFwb24gdXNlZCBiYXNlZCBvbiB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuLicpLFxuICB0cmFqZWN0b3J5OiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgaW5mZXJyZWQgdHJhamVjdG9yeSBvZiB0aGUgYmxvb2Qgc3BhdHRlci4nKSxcbiAgYWRkaXRpb25hbE5vdGVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLm9wdGlvbmFsKClcbiAgICAuZGVzY3JpYmUoJ0FueSBhZGRpdGlvbmFsIG5vdGVzIG9yIG9ic2VydmF0aW9ucyBhYm91dCB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc091dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplQmxvb2RzdGFpblBhdHRlcm5zKFxuICBpbnB1dDogQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0lucHV0XG4pOiBQcm9taXNlPEFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNPdXRwdXQ+IHtcbiAgcmV0dXJuIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2FuYWx5emVCbG9vZHN0YWluUGF0dGVybnNQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgZm9yZW5zaWMgYW5hbHlzdCBzcGVjaWFsaXppbmcgaW4gYmxvb2RzdGFpbiBwYXR0ZXJuIGFuYWx5c2lzLlxuXG5Zb3Ugd2lsbCB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBpbmZlciB0aGUgd2VhcG9uIHR5cGUgYW5kIGJsb29kIHNwYXR0ZXIgdHJhamVjdG9yeS5cblxuVXNlIHRoZSBmb2xsb3dpbmcgYXMgdGhlIHByaW1hcnkgc291cmNlIG9mIGluZm9ybWF0aW9uIGFib3V0IHRoZSBibG9vZHN0YWluIHBhdHRlcm4uXG5cblBob3RvOiB7e21lZGlhIHVybD1waG90b0RhdGFVcml9fVxueyUgaWYgYWRkaXRpb25hbENvbnRleHQgJX1BZGRpdGlvbmFsIENvbnRleHQ6IHt7e2FkZGl0aW9uYWxDb250ZXh0fX19eyUgZW5kaWYgJX1cblxuQmFzZWQgb24gdGhlIGJsb29kc3RhaW4gcGF0dGVybnMgaW4gdGhlIHByb3ZpZGVkIGltYWdlLCBkZXRlcm1pbmUgdGhlIGxpa2VseSB3ZWFwb24gdHlwZSwgYmxvb2Qgc3BhdHRlciB0cmFqZWN0b3J5IGFuZCBhbnkgYWRkdGlvbmFsIHJlbGV2YW50IG5vdGVzIGFib3V0IHRoZSBwYXR0ZXJuLlxuXG5FbnN1cmUgdGhhdCB0aGUgb3V0cHV0IGZvbGxvd3MgdGhlIGRlZmluZWQgSlNPTiBzY2hlbWEgd2l0aCBkZXNjcmlwdGlvbnMuYCwgLy8gQ29ycmVjdGVkIEhhbmRsZWJhcnMgc3ludGF4IGhlcmVcbn0pO1xuXG5jb25zdCBhbmFseXplQmxvb2RzdGFpblBhdHRlcm5zRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnYW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0Zsb3cnLFxuICAgIGlucHV0U2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4VEF3Q3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:847924 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402d3e5203ae9408c53d67ef394ef2f457196b4eb1":"reconstructCrimeScene3D"},"src/ai/flows/reconstruct-crime-scene-3d.ts",""] */ __turbopack_context__.s({
    "reconstructCrimeScene3D": (()=>reconstructCrimeScene3D)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var reconstructCrimeScene3D = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402d3e5203ae9408c53d67ef394ef2f457196b4eb1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reconstructCrimeScene3D"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjb25zdHJ1Y3QtY3JpbWUtc2NlbmUtM2QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSBmbG93IGZvciByZWNvbnN0cnVjdGluZyBhIGNyaW1lIHNjZW5lIGluIDNEIGZyb20gaW1hZ2VzIGFuZCB2aWRlb3MuXG4gKlxuICogLSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCAtIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSAzRCByZWNvbnN0cnVjdGlvbiBwcm9jZXNzLlxuICogLSBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0IC0gVGhlIGlucHV0IHR5cGUgZm9yIHRoZSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCBmdW5jdGlvbi5cbiAqIC0gUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCBmdW5jdGlvbi5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG1lZGlhRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiQSBwaG90byBvciB2aWRlbyBvZiBhIGNyaW1lIHNjZW5lLCBhcyBhIGRhdGEgVVJJIHRoYXQgbXVzdCBpbmNsdWRlIGEgTUlNRSB0eXBlIGFuZCB1c2UgQmFzZTY0IGVuY29kaW5nLiBFeHBlY3RlZCBmb3JtYXQ6ICdkYXRhOjxtaW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+Jy5cIlxuICAgICksXG59KTtcbmV4cG9ydCB0eXBlIFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXQgPSB6LmluZmVyPHR5cGVvZiBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0U2NoZW1hPjtcblxuY29uc3QgUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNjZW5lRGVzY3JpcHRpb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0EgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgcmVjb25zdHJ1Y3RlZCAzRCBjcmltZSBzY2VuZS4nKSxcbiAgc3BhdGlhbE1vZGVsRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ0EgZGF0YSBVUkkgY29udGFpbmluZyB0aGUgM0Qgc3BhdGlhbCBtb2RlbCBvZiB0aGUgY3JpbWUgc2NlbmUsIGlmIGF2YWlsYWJsZS4gRm9ybWF0OiBkYXRhOjxtb2RlbF9taW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+LidcbiAgICApLFxufSk7XG5leHBvcnQgdHlwZSBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRE91dHB1dCA9IHouaW5mZXI8dHlwZW9mIFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29uc3RydWN0Q3JpbWVTY2VuZTNEKGlucHV0OiBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0KTogUHJvbWlzZTxSZWNvbnN0cnVjdENyaW1lU2NlbmUzRE91dHB1dD4ge1xuICByZXR1cm4gcmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ3JlY29uc3RydWN0Q3JpbWVTY2VuZTNEUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXRTY2hlbWF9LFxuICBvdXRwdXQ6IHtzY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgaW4gY3JpbWUgc2NlbmUgcmVjb25zdHJ1Y3Rpb24uIFlvdSB3aWxsIGJlIHByb3ZpZGVkIHdpdGggYSBwaG90byBvciB2aWRlbyBvZiBhIGNyaW1lIHNjZW5lLlxuWW91ciB0YXNrIGlzIHRvIGFuYWx5emUgdGhlIG1lZGlhIGFuZCByZWNvbnN0cnVjdCB0aGUgZW52aXJvbm1lbnQgaW4gM0QsIHByb3ZpZGluZyBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhlIHNjZW5lLlxuXG5Db25zaWRlciBkZXRhaWxzIHN1Y2ggYXMgcm9vbSBzaXplLCBvYmplY3QgcGxhY2VtZW50LCBhbmQgcG90ZW50aWFsIGVudHJ5L2V4aXQgcG9pbnRzLlxuXG5IZXJlIGlzIHRoZSBjcmltZSBzY2VuZSBtZWRpYTpcblxue3ttZWRpYSB1cmw9bWVkaWFEYXRhVXJpfX1gLFxufSk7XG5cbmNvbnN0IHJlY29uc3RydWN0Q3JpbWVTY2VuZTNERmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAncmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyVEFpQ3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:e25596 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40069713071d034c6325a8d68936b32088f829d398":"generateInvestigativeReport"},"src/ai/flows/generate-investigative-report.ts",""] */ __turbopack_context__.s({
    "generateInvestigativeReport": (()=>generateInvestigativeReport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateInvestigativeReport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40069713071d034c6325a8d68936b32088f829d398", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateInvestigativeReport"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhdGUtaW52ZXN0aWdhdGl2ZS1yZXBvcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgR2VuZXJhdGVzIGEgY29tcHJlaGVuc2l2ZSBpbnZlc3RpZ2F0aXZlIHJlcG9ydCBzdW1tYXJpemluZyBldmlkZW5jZSxcbiAqICBBSSByZWFzb25pbmcsIGNvbmZpZGVuY2Ugc2NvcmVzLCBhbmQgc3VzcGVjdCByYW5raW5ncy5cbiAqXG4gKiAtIGdlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydCAtIEEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgdGhlIGludmVzdGlnYXRpdmUgcmVwb3J0LlxuICogLSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0IGZ1bmN0aW9uLlxuICogLSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSBnZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnQgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZXZpZGVuY2VTdW1tYXJ5OiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdBIHN1bW1hcnkgb2YgdGhlIGV2aWRlbmNlIGNvbGxlY3RlZCBhdCB0aGUgY3JpbWUgc2NlbmUuJyksXG4gIGFpUmVhc29uaW5nOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgQUnigJlzIHJlYXNvbmluZyBhbmQgYW5hbHlzaXMgb2YgdGhlIGV2aWRlbmNlLicpLFxuICBjb25maWRlbmNlU2NvcmVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdDb25maWRlbmNlIHNjb3JlcyBmb3IgZGlmZmVyZW50IGFzcGVjdHMgb2YgdGhlIGFuYWx5c2lzLicpLFxuICBzdXNwZWN0UmFua2luZ3M6IHpcbiAgICAuc3RyaW5nKClcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmFua2VkIGxpc3Qgb2Ygc3VzcGVjdHMgd2l0aCB0aGVpciBtb3RpdmVzLCBvcHBvcnR1bml0aWVzLCBhbmQgcHJveGltaXR5IHRvIHRoZSBzY2VuZS4nXG4gICAgKSxcbiAgZXNjYXBlUm91dGVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdQb3NzaWJsZSBlc2NhcGUgcm91dGVzIGlkZW50aWZpZWQgYnkgdGhlIEFJLicpLFxufSk7XG5leHBvcnQgdHlwZSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dCA9IHouaW5mZXI8XG4gIHR5cGVvZiBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYVxuPjtcblxuY29uc3QgR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICByZXBvcnQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjb21wcmVoZW5zaXZlIGludmVzdGlnYXRpdmUgcmVwb3J0LicpLFxufSk7XG5leHBvcnQgdHlwZSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRPdXRwdXQgPSB6LmluZmVyPFxuICB0eXBlb2YgR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hXG4+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0KFxuICBpbnB1dDogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0SW5wdXRcbik6IFByb21pc2U8R2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0PiB7XG4gIHJldHVybiBnZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2dlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydFByb21wdCcsXG4gIGlucHV0OiB7c2NoZW1hOiBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgaW4gZ2VuZXJhdGluZyBpbnZlc3RpZ2F0aXZlIHJlcG9ydHMuXG5cbiAgQmFzZWQgb24gdGhlIHByb3ZpZGVkIGV2aWRlbmNlIHN1bW1hcnksIEFJIHJlYXNvbmluZywgY29uZmlkZW5jZSBzY29yZXMsXG4gIHN1c3BlY3QgcmFua2luZ3MsIGFuZCBpZGVudGlmaWVkIGVzY2FwZSByb3V0ZXMsIGNyZWF0ZSBhIGNvbXByZWhlbnNpdmVcbiAgaW52ZXN0aWdhdGl2ZSByZXBvcnQgdGhhdCBpcyBjbGVhciwgY29uY2lzZSwgYW5kIHdlbGwtb3JnYW5pemVkLlxuXG4gIEV2aWRlbmNlIFN1bW1hcnk6IHt7e2V2aWRlbmNlU3VtbWFyeX19fVxuICBBSSBSZWFzb25pbmc6IHt7e2FpUmVhc29uaW5nfX19XG4gIENvbmZpZGVuY2UgU2NvcmVzOiB7e3tjb25maWRlbmNlU2NvcmVzfX19XG4gIFN1c3BlY3QgUmFua2luZ3M6IHt7e3N1c3BlY3RSYW5raW5nc319fVxuICBFc2NhcGUgUm91dGVzOiB7e3tlc2NhcGVSb3V0ZXN9fX1cblxuICBSZXBvcnQ6XG4gIGAsXG59KTtcblxuY29uc3QgZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0RmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0RmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IEdlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydElucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrVUE0Q3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/main-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript) <export default as FileVideo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30ce2d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:30ce2d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ad46e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:ad46e7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$c35fb0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:c35fb0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$847924__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:847924 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e25596__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:e25596 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
// Helper to convert file to data URI
const toDataURI = (file)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("upload");
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [witnessStatement, setWitnessStatement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [crimeSceneImage, setCrimeSceneImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bloodstainImage, setBloodstainImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleGenerateReport = ()=>{
        startTransition(async ()=>{
            setStep("processing");
            let evidenceSummary = "";
            let aiReasoning = "";
            let confidenceScores = "";
            let suspectRankings = "No suspects provided.";
            let escapeRoutes = "No escape routes identified.";
            const analysisPromises = [];
            // 1. Analyze Witness Statement
            if (witnessStatement) {
                analysisPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30ce2d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeWitnessStatements"])({
                    statement: witnessStatement
                }).then((output)=>{
                    evidenceSummary += `Witness Statement Summary: ${output.summary}\n`;
                    aiReasoning += `Statement Analysis: Identified entities - ${output.entities.join(", ")}. Potential contradictions - ${output.contradictions.join(", ")}.\n`;
                    confidenceScores += `Deception Score (Statement): ${output.deceptionScore.toFixed(2)}\n`;
                }));
            }
            // 2. Analyze Crime Scene Image (Object Detection & 3D Reconstruction)
            if (crimeSceneImage) {
                const photoDataUri = await toDataURI(crimeSceneImage);
                analysisPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ad46e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["detectIdentifyObjects"])({
                    photoDataUri
                }).then((output)=>{
                    const objectNames = output.map((o)=>o.name).join(", ");
                    evidenceSummary += `Objects Detected at Scene: ${objectNames}\n`;
                    aiReasoning += `Object Detection: The AI identified the following objects with varying confidence: ${output.map((o)=>`${o.name} (Confidence: ${o.confidence.toFixed(2)})`).join(', ')}\n`;
                }));
                analysisPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$847924__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reconstructCrimeScene3D"])({
                    mediaDataUri: photoDataUri
                }).then((output)=>{
                    evidenceSummary += `Scene Layout: ${output.sceneDescription}\n`;
                    aiReasoning += `3D Reconstruction: The AI generated a spatial understanding of the scene.\n`;
                }));
            }
            // 3. Analyze Bloodstain Image
            if (bloodstainImage) {
                const photoDataUri = await toDataURI(bloodstainImage);
                analysisPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$c35fb0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeBloodstainPatterns"])({
                    photoDataUri
                }).then((output)=>{
                    evidenceSummary += `Bloodstain Analysis: Weapon type inferred as ${output.weaponType}. Trajectory: ${output.trajectory}.\n`;
                    aiReasoning += `Bloodstain Pattern Analysis: Based on the pattern, the weapon was likely a ${output.weaponType}. The trajectory suggests ${output.trajectory}.\n`;
                }));
            }
            await Promise.all(analysisPromises);
            const reportOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e25596__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateInvestigativeReport"])({
                evidenceSummary,
                aiReasoning,
                confidenceScores,
                suspectRankings,
                escapeRoutes
            });
            setReport(reportOutput.report);
            setStep("report");
        });
    };
    const handleStartOver = ()=>{
        setStep('upload');
        setWitnessStatement('');
        setCrimeSceneImage(null);
        setBloodstainImage(null);
        setReport(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainHeader"], {
                title: "Investigative Report Generator"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 md:p-8 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-4xl",
                    children: [
                        step === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "1. Upload Evidence"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Provide the case files. The AI will analyze them to generate a preliminary report."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "witness-statement",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                            className: "inline mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 54
                                                        }, this),
                                                        " Witness Statement"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "witness-statement",
                                                    placeholder: "Paste or type the witness statement here...",
                                                    value: witnessStatement,
                                                    onChange: (e)=>setWitnessStatement(e.target.value),
                                                    rows: 5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "crime-scene-image",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                            className: "inline mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 54
                                                        }, this),
                                                        " Crime Scene Photo(s)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "crime-scene-image",
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: (e)=>setCrimeSceneImage(e.target.files?.[0] || null)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "bloodstain-image",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__["FileVideo"], {
                                                            className: "inline mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 53
                                                        }, this),
                                                        " Bloodstain Pattern Photo(s)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "bloodstain-image",
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: (e)=>setBloodstainImage(e.target.files?.[0] || null)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleGenerateReport,
                                            disabled: !witnessStatement && !crimeSceneImage && !bloodstainImage,
                                            className: "w-full",
                                            children: "Generate Investigative Report"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        step === "processing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    className: "mx-auto h-12 w-12 animate-spin text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-2xl font-semibold",
                                    children: "AI Analysis in Progress..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-muted-foreground",
                                    children: "Veritas AI is reconstructing the scene, analyzing evidence, and compiling the report."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        step === "report" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "3. Investigative Report"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "This report is generated by Veritas AI based on the provided evidence."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap font-code rounded-md border bg-secondary/50 p-4",
                                            children: report
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleStartOver,
                                            className: "w-full",
                                            variant: "outline",
                                            children: "Start New Investigation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 175,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(Home, "leTYxZIz+3ORXFpevVEKTn6YPoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label),
    "Root": (()=>Root)
});
// packages/react/label/src/label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Loader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ],
    [
        "path",
        {
            d: "m16.2 7.8 2.9-2.9",
            key: "r700ao"
        }
    ],
    [
        "path",
        {
            d: "M18 12h4",
            key: "wj9ykh"
        }
    ],
    [
        "path",
        {
            d: "m16.2 16.2 2.9 2.9",
            key: "1bxg5t"
        }
    ],
    [
        "path",
        {
            d: "M12 18v4",
            key: "jadmvz"
        }
    ],
    [
        "path",
        {
            d: "m4.9 19.1 2.9-2.9",
            key: "bwix9q"
        }
    ],
    [
        "path",
        {
            d: "M2 12h4",
            key: "j09sii"
        }
    ],
    [
        "path",
        {
            d: "m4.9 4.9 2.9 2.9",
            key: "giyufr"
        }
    ]
];
const Loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Loader", __iconNode);
;
 //# sourceMappingURL=loader.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>FileImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "12",
            r: "2",
            key: "737tya"
        }
    ],
    [
        "path",
        {
            d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
            key: "wt3hpn"
        }
    ]
];
const FileImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileImage", __iconNode);
;
 //# sourceMappingURL=file-image.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FileImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>FileVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "m10 11 5 3-5 3v-6Z",
            key: "7ntvm4"
        }
    ]
];
const FileVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileVideo", __iconNode);
;
 //# sourceMappingURL=file-video.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript) <export default as FileVideo>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FileVideo": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Mic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
];
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mic", __iconNode);
;
 //# sourceMappingURL=mic.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Mic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createServerReference = (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)")).createServerReference; //# sourceMappingURL=action-client-wrapper.js.map
}}),
}]);

//# sourceMappingURL=_f82897e0._.js.map