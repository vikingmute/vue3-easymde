import { Options } from 'easymde'
export type EditorProps = {
  modelValue?: string;
  value?: string;
  options?: Options;
}
export interface EditorEvents {
  (type: 'update:modelValue', value: string): void;
  (type: 'change', value: string): void;
  (type: 'blur'): void;
}
export interface EditorInstance {
  clear: () => void;
  getMDEInstance: () => EasyMDE | null;
}