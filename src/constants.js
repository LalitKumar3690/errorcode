export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Shree, " + name + "!");\n}\n\ngreet("Ganeshaye Namah ");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Shree, " + data.name + "!");\n}\n\ngreet({ name: "Ganeshaye Namah" });\n`,
  python: `\ndef greet(name):\n\tprint("Shree, " + name + "!")\n\ngreet("Ganeshaye Namah")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Shree Ganeshaye Namah");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Shree Ganeshaye Namah in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Shree Ganeshaye Namah';\necho $name;\n",
};
