// Stream-Konfiguration wird zur Laufzeit aus public/streams.json geladen.
// Vorteil: URLs lassen sich vor (oder während) eines Rennens austauschen,
// ohne den App-Code neu zu bauen oder neu zu deployen.

const CONFIG_URL = `${process.env.PUBLIC_URL || ""}/streams.json`;

export async function loadStreamsConfig() {
  // cache: 'no-cache' sorgt für einen Conditional-Request — der Browser
  // bekommt eine aktuelle Datei, kann aber bei unverändertem ETag noch
  // den Cache nutzen.
  const res = await fetch(CONFIG_URL, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error(`streams.json: HTTP ${res.status}`);
  }
  const data = await res.json();
  validate(data);
  return data;
}

function validate(data) {
  if (!data || typeof data !== "object") throw new Error("streams.json: kein Objekt");
  if (!data.mainStream?.urls) throw new Error("streams.json: mainStream.urls fehlt");
  if (!Array.isArray(data.onboards)) throw new Error("streams.json: onboards fehlt oder ist kein Array");
}

// Liefert die Stream-Liste für eine bestimmte Sprache. Index 0 ist immer
// der Main-Stream, danach folgen die Onboards in Definitionsreihenfolge.
export function buildStreamList(config, language) {
  const lang = config.mainStream.urls[language]
    ? language
    : Object.keys(config.mainStream.urls)[0];
  return [
    {
      id: config.mainStream.id ?? "main",
      desc: config.mainStream.desc ?? "Main",
      url: config.mainStream.urls[lang],
    },
    ...config.onboards.map((o) => ({ id: o.id, desc: o.desc, url: o.url })),
  ];
}

export function availableLanguages(config) {
  return Object.keys(config.mainStream.urls);
}
