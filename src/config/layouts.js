// Datengetriebene Grid-Layouts — übernommen von Main-Branch.
//
// Layout-Struktur: { cols, cells: [{i, span?} | {empty: true}] }
// Reihen werden implizit vom Browser per CSS Grid auto-flow erzeugt — die
// Anzahl ergibt sich aus den row-span-Werten der Zellen. Genau wie im
// ursprünglichen Code auf main.
//
// Index in `overviewLayouts` / `onboardLayouts` = streamCount - 1.

const cell = (i, span) => ({ i, ...(span ? { span } : {}) });
const empty = (span) => ({ empty: true, ...(span ? { span } : {}) });

export const overviewLayouts = [
  // 1: Vollbild
  { cols: 1, cells: [cell(0)] },

  // 2: Main + 1 Onboard nebeneinander, beide volle Höhe
  {
    cols: 2,
    cells: [cell(0, "row-span-4"), cell(1, "row-span-4")],
  },

  // 3: Main groß oben (4/5 Höhe, volle Breite), 2 Onboards unten
  {
    cols: 2,
    cells: [cell(0, "row-span-4 col-span-2"), cell(1), cell(2)],
  },

  // 4: Main groß oben, 3 Onboards unten
  {
    cols: 3,
    cells: [cell(0, "row-span-4 col-span-3"), cell(1), cell(2), cell(3)],
  },

  // 5: Main groß oben, 4 Onboards unten
  {
    cols: 4,
    cells: [cell(0, "row-span-4 col-span-4"), cell(1), cell(2), cell(3), cell(4)],
  },

  // 6: Main 3×3 mittig, 5 Onboards außen, 1 leere Zelle
  {
    cols: 5,
    cells: [
      cell(1), cell(0, "row-span-3 col-span-3"), cell(2),
      cell(3), cell(4),
      empty(), cell(5),
    ],
  },

  // 7: Main 3×3 mittig, 6 Onboards außen
  {
    cols: 5,
    cells: [
      cell(1), cell(0, "row-span-3 col-span-3"), cell(2),
      cell(3), cell(4),
      cell(5), cell(6),
    ],
  },

  // 8: Main 2×3 oben mittig, 5 Onboards Reihe 1+2, 3 unten (mittlerer breiter)
  {
    cols: 5,
    cells: [
      cell(1), cell(0, "row-span-2 col-span-3"), cell(2),
      cell(3), cell(4),
      cell(5), cell(6, "col-span-3"), cell(7),
    ],
  },

  // 9: Main 2×2 oben mittig, 8 Onboards
  {
    cols: 4,
    cells: [
      cell(1), cell(0, "row-span-2 col-span-2"), cell(2),
      cell(3), cell(4),
      cell(5), cell(6), cell(7), cell(8),
    ],
  },

  // 10: Main 2×3 oben mittig, 9 Onboards
  {
    cols: 5,
    cells: [
      cell(1), cell(0, "row-span-2 col-span-3"), cell(2),
      cell(3), cell(4),
      cell(5), cell(6), cell(7), cell(8), cell(9),
    ],
  },

  // 11: Main 2×3 mittig (rows 2-4), 4 oben + 4 unten + 2 Seiten
  {
    cols: 4,
    cells: [
      cell(1), cell(2), cell(3), cell(4),
      cell(5, "row-span-3"), cell(0, "row-span-3 col-span-2"), cell(6, "row-span-3"),
      cell(7), cell(8), cell(9), cell(10),
    ],
  },

  // 12: Main 2×3 mittig (rows 2-4), 4 oben + 4 unten (mit Lücke)
  {
    cols: 4,
    cells: [
      cell(1), cell(2), cell(3), cell(4),
      cell(5, "row-span-2"), cell(0, "row-span-3 col-span-2"), cell(6, "row-span-2"),
      cell(7), cell(8),
      cell(9), cell(10), cell(11),
    ],
  },

  // 13: Main 2×3 mittig (rows 2-4), 4 oben + 4 unten + 4 Seiten
  {
    cols: 4,
    cells: [
      cell(1), cell(2), cell(3), cell(4),
      cell(5, "row-span-2"), cell(0, "row-span-3 col-span-2"), cell(6, "row-span-2"),
      cell(7), cell(8),
      cell(9), cell(10), cell(11), cell(12),
    ],
  },

  // 14: Main 2×3 mittig, 5 oben + 4 unten + 4 Seiten + 1 leer
  {
    cols: 5,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5),
      cell(6), cell(0, "row-span-2 col-span-3"), cell(7),
      cell(8), cell(9),
      cell(10), cell(11), cell(12), cell(13), empty(),
    ],
  },

  // 15: Main 2×3 mittig, 5 oben + 5 unten + 4 Seiten
  {
    cols: 5,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5),
      cell(6), cell(0, "row-span-2 col-span-3"), cell(7),
      cell(8), cell(9),
      cell(10), cell(11), cell(12), cell(13), cell(14),
    ],
  },

  // 16: Main 3×4 mittig (rows 2-4), 6 oben + 4 unten (letzter doppelt) + 4 Seiten
  {
    cols: 6,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5), cell(6),
      cell(7), cell(0, "row-span-3 col-span-4"), cell(8),
      cell(9), cell(10),
      cell(11), cell(12),
      cell(13), cell(14), cell(15, "col-span-2"),
    ],
  },

  // 17: Main 3×4 mittig, 6 oben + 4 unten + 6 Seiten
  {
    cols: 6,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5), cell(6),
      cell(7), cell(0, "row-span-3 col-span-4"), cell(8),
      cell(9), cell(10),
      cell(11), cell(12),
      cell(13), cell(14), cell(15), cell(16),
    ],
  },

  // 18: Wie 17 + zusätzlicher Onboard col-span-2 unten
  {
    cols: 6,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5), cell(6),
      cell(7), cell(0, "row-span-3 col-span-4"), cell(8),
      cell(9), cell(10),
      cell(11), cell(12),
      cell(13), cell(14), cell(15), cell(16), cell(17, "col-span-2"),
    ],
  },

  // 19: Wie 18, aber 6 Onboards in unterster Reihe statt col-span
  {
    cols: 6,
    cells: [
      cell(1), cell(2), cell(3), cell(4), cell(5), cell(6),
      cell(7), cell(0, "row-span-3 col-span-4"), cell(8),
      cell(9), cell(10),
      cell(11), cell(12),
      cell(13), cell(14), cell(15), cell(16), cell(17), cell(18),
    ],
  },
];

// Onboards-Modus — entspricht der Original-Struktur auf main, 1:1 übernommen.
export const onboardLayouts = [
  // 1: Fallback auf Main
  { cols: 1, cells: [cell(0)] },
  // 2: 1 Onboard
  { cols: 1, cells: [cell(1)] },
  // 3
  { cols: 2, cells: [cell(1), cell(2)] },
  // 4
  { cols: 3, cells: [cell(1), cell(2), cell(3)] },
  // 5
  { cols: 2, cells: [cell(1), cell(2), cell(3), cell(4)] },
  // 6
  {
    cols: 6,
    cells: [
      cell(1, "col-span-2"), cell(2, "col-span-2"), cell(3, "col-span-2"),
      cell(4, "col-span-3"), cell(5, "col-span-3"),
    ],
  },
  // 7
  {
    cols: 2,
    cells: [cell(1), cell(2), cell(3), cell(4), cell(5), cell(6)],
  },
  // 8
  {
    cols: 6,
    cells: [
      cell(1, "col-span-2"), cell(2, "col-span-2"), cell(3, "col-span-2"),
      cell(4, "col-span-3"), cell(5, "col-span-3"),
      cell(6, "col-span-3"), cell(7, "col-span-3"),
    ],
  },
  // 9
  {
    cols: 6,
    cells: [
      cell(1, "col-span-2"), cell(2, "col-span-2"), cell(3, "col-span-2"),
      cell(4, "col-span-3"), cell(5, "col-span-3"),
      cell(6, "col-span-2"), cell(7, "col-span-2"), cell(8, "col-span-2"),
    ],
  },
  // 10
  {
    cols: 3,
    cells: [
      cell(1), cell(2), cell(3),
      cell(4), cell(5), cell(6),
      cell(7), cell(8), cell(9),
    ],
  },
  // 11
  {
    cols: 12,
    cells: [
      cell(1, "col-span-3"), cell(2, "col-span-3"), cell(3, "col-span-3"), cell(4, "col-span-3"),
      cell(5, "col-span-4"), cell(6, "col-span-4"), cell(7, "col-span-4"),
      cell(8, "col-span-4"), cell(9, "col-span-4"), cell(10, "col-span-4"),
    ],
  },
  // 12
  {
    cols: 12,
    cells: [
      cell(1, "col-span-3"), cell(2, "col-span-3"), cell(3, "col-span-3"), cell(4, "col-span-3"),
      cell(5, "col-span-3"), cell(6, "col-span-3"), cell(7, "col-span-3"), cell(8, "col-span-3"),
      cell(9, "col-span-4"), cell(10, "col-span-4"), cell(11, "col-span-4"),
    ],
  },
  // 13
  {
    cols: 3,
    cells: [
      cell(1), cell(2), cell(3),
      cell(4), cell(5), cell(6),
      cell(7), cell(8), cell(9),
      cell(10), cell(11), cell(12),
    ],
  },
  // 14
  {
    cols: 12,
    cells: [
      cell(1, "col-span-3"), cell(2, "col-span-3"), cell(3, "col-span-3"), cell(4, "col-span-3"),
      cell(5, "col-span-4"), cell(6, "col-span-4"), cell(7, "col-span-4"),
      cell(8, "col-span-4"), cell(9, "col-span-4"), cell(10, "col-span-4"),
      cell(11, "col-span-4"), cell(12, "col-span-4"), cell(13, "col-span-4"),
    ],
  },

  // 15
  {
    cols: 12,
    cells: [
      cell(1, "col-span-3"), cell(2, "col-span-3"), cell(3, "col-span-3"), cell(4, "col-span-3"),
      cell(5, "col-span-3"), cell(6, "col-span-3"), cell(7, "col-span-3"), cell(8, "col-span-3"),
      cell(9, "col-span-4"), cell(10, "col-span-4"), cell(11, "col-span-4"),
      cell(12, "col-span-4"), cell(13, "col-span-4"), cell(14, "col-span-4"),
    ],
  },

  // 16
  {
    cols: 3,
    cells: [
      cell(1), cell(2), cell(3),
      cell(4), cell(5), cell(6),
      cell(7), cell(8), cell(9),
      cell(10), cell(11), cell(12),
      cell(13), cell(14), cell(15),
    ],
  },

  // 17
  {
    cols: 4,
    cells: [
      cell(1), cell(2), cell(3), cell(4),
      cell(5), cell(6), cell(7), cell(8),
      cell(9), cell(10), cell(11), cell(12),
      cell(13), cell(14), cell(15), cell(16),
    ],
  },

  // 18
  {
    cols: 12,
    cells: [
      cell(1, "col-span-3"), cell(2, "col-span-3"), cell(3, "col-span-3"), cell(4, "col-span-3"),
      cell(5, "col-span-3"), cell(6, "col-span-3"), cell(7, "col-span-3"), cell(8, "col-span-3"),
      cell(9, "col-span-4"), cell(10, "col-span-4"), cell(11, "col-span-4"),
      cell(12, "col-span-4"), cell(13, "col-span-4"), cell(14, "col-span-4"),
      cell(15, "col-span-4"), cell(16, "col-span-4"), cell(17, "col-span-4"),
    ],
  },

  // 19
  {
    cols: 3,
    cells: [
      cell(1), cell(2), cell(3),
      cell(4), cell(5), cell(6),
      cell(7), cell(8), cell(9),
      cell(10), cell(11), cell(12),
      cell(13), cell(14), cell(15),
      cell(16), cell(17), cell(18),
    ],
  },
];

export const GRID_MODE = {
  OVERVIEW: -1,
  ONBOARDS: -2,
};

export function pickLayout(mode, streamCount) {
  if (streamCount <= 0) return null;
  const idx = streamCount - 1;
  if (mode === GRID_MODE.OVERVIEW) return overviewLayouts[idx] ?? null;
  if (mode === GRID_MODE.ONBOARDS) return onboardLayouts[idx] ?? null;
  return null;
}
