export const defaultCaseData = {
  crimeDescription: `Homicide victim found in a luxury apartment. The victim, a wealthy businessman, was found with a single stab wound to the chest. No signs of forced entry. Time of death estimated to be between 10 PM and 12 AM.`,
  suspectList: `1. The Butler: Had an argument with the victim over unpaid wages. Alibi: Claims he was in his quarters all night.
2. The Business Partner: Stood to gain control of the company. Alibi: Claims to be at a bar across town, but no one can verify.
3. The Ex-Wife: Recently went through a bitter divorce. Alibi: Claims she was at home with her new partner.`,
  victimInformation: `Victim: John Doe, 55, CEO of a tech company. Known for being ruthless in business. Had many rivals. Estranged from his family.`,
  relationalData: `The Business Partner was in deep debt to the victim. The Ex-Wife has a history of violent outbursts. The Butler was recently fired but had not yet left the premises.`,
  witnessStatements: [
    { witnessName: 'Neighbor', statementText: 'I heard a loud argument around 11 PM. It sounded like two men shouting. I couldn\'t make out the words, but it was heated. Then, silence.' },
    { witnessName: 'Delivery Driver', statementText: 'I delivered a package to the victim\'s apartment around 9:30 PM. He seemed agitated and was on the phone. He mentioned something about a "double-cross".' }
  ],
  weaponInference: {
    woundDescription: 'Single, deep puncture wound, approximately 1.5 inches wide, located in the upper left chest. Clean edges.',
    sceneDescription: 'Minimal blood spatter, suggesting the weapon was not withdrawn quickly. A decorative letter opener is missing from the victim\'s desk.',
    victimDescription: 'Victim is a 55-year-old male, average build. No defensive wounds were found on his hands or arms.'
  }
};
