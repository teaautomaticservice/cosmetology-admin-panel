type EnvType = {
  REACT_APP_API_URL: string;
}

export const env: EnvType = { ...process.env, ...window.env }