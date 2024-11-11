import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
      <Box bg="#161e32" color="gray.500" px={6} py={8}>
      <HStack spacing={2}>
        <Box w="100%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Box borderLeftRadius={20} className="overflow-hidden">
          <Editor

            
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="85vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
          </Box>
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
