export function getStatusMeta(level = "") {
    const text = level.toLowerCase();
  
    if (text.includes("higher")) return { arrow: "▲" };
    if (text.includes("lower")) return { arrow: "▼" };
    return { arrow: "" };
  }
  