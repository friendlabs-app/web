export const demoRounds = [
  { parent: 'dog', name: 'Dospělý pejsek', baby: 'puppy', success: 'Ano! Pejsek a štěňátko.' },
  { parent: 'cat', name: 'Dospělá kočka', baby: 'kitten', success: 'Ano! Kočka a koťátko.' },
  { parent: 'hen', name: 'Dospělá slepice', baby: 'chick', success: 'Ano! Slepice a kuřátko.' },
] as const;

export const demoChoices = [
  { id: 'chick', label: 'Vybrat kuřátko' },
  { id: 'puppy', label: 'Vybrat štěňátko' },
  { id: 'kitten', label: 'Vybrat koťátko' },
] as const;
