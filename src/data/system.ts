import type { SystemNode } from "./types";

export const systemNodes: SystemNode[] = [
  {
    id: "operator",
    title: "Operator",
    layer: "operator",
    summary: "Keys the game at the console. Handhelds cover shot clocks and play clocks.",
    detail:
      "The operator never talks to the digits directly. Every Ball, point, or clock start becomes a data word on the CX board. Handheld pendants (shot timer, play clock, DGT) are extra keypads on the same console so table officials and field officials share one clock domain.",
    parts: ["mp-console", "mm-console", "shot-timer-handheld", "play-clock-handheld"],
    next: ["console"],
  },
  {
    id: "console",
    title: "Control console",
    layer: "control",
    summary: "MM (15-key) or MP (37-key + LCD) running sport software on the CX driver.",
    detail:
      "MP consoles show a 32-character LCD and expose four identical stereo outputs; MM consoles are the 15-key subset used on compact baseball and football boards. Software version flashes on the LCD at power-up. Jumpers on the CX PCB select sport personality. Brightness (50 levels), Time of Day, Practice Segment Timer, and ETN names are console features — the cabinet just renders what it is told.",
    parts: ["mp-console", "mm-console", "cx-driver"],
    next: ["data-out"],
  },
  {
    id: "data-out",
    title: "Data out",
    layer: "control",
    summary: "1/4-inch stereo jack. One hop to a junction box, ScoreLink TX, or the next display.",
    detail:
      "A 10-foot male patch cable is the first hop. All MP outputs are the same: each can drive a board and daisy-chain up to ten displays. Beyond that — or when you do not want to pull cable — the jack feeds a ScoreLink transmitter instead.",
    parts: ["extension-cable", "stereo-patch", "cx-driver"],
    next: ["wired", "wireless"],
  },
  {
    id: "wired",
    title: "Hard-wired path",
    layer: "path",
    summary: "Patch cable → junction box → control line (up to 1,000 ft) → cabinet data terminals.",
    detail:
      "The field junction box is the handoff between the operator’s stereo cable and the buried/aerial control line. Shield, red, and black land on H5/H6/H7 of the first LX driver. Wired daisy-chain: data-out terminal block of board N to data-in of board N+1, practical limit of ten.",
    parts: ["junction-box", "extension-cable", "stereo-patch"],
    next: ["entry"],
  },
  {
    id: "wireless",
    title: "ScoreLink path",
    layer: "path",
    summary: "2.4 GHz or 900 MHz RF modem pair. Receiver in a NEMA box on the cabinet.",
    detail:
      "SL-230/330 (2.4 GHz) and SL-220/320 (900 MHz); indoor SL-2xx, outdoor SL-3xx. Transmitter sits with the console (putty enclosure). Receiver feeds J2 of the first LX driver just as a cable would. Number of synchronized displays is effectively unlimited.",
    parts: ["scorelink"],
    next: ["entry"],
  },
  {
    id: "entry",
    title: "Cabinet entry",
    layer: "cabinet",
    summary: "120 VAC power and data enter the back of the cabinet near the ID plate.",
    detail:
      "Outdoor model number is stamped on a metal plate beside the power entry — quote it for support. Power goes to the junction chassis fuses; data goes to the first LX driver (or the ScoreLink receiver, then J2).",
    parts: ["aluminum-cabinet", "junction-chassis", "fuse"],
    next: ["chassis"],
  },
  {
    id: "chassis",
    title: "Junction chassis",
    layer: "cabinet",
    summary: "Power supplies, fuses, and the LX driver chain share one service plate.",
    detail:
      "On LX2350 the chassis is behind the period-clock digits. Standard: one supply, two driver PCBs, 5 A + 3 A fuses. ETN: second supply, third PCB (ETN16), 10 A fuse. Always kill power before pulling boards.",
    parts: ["junction-chassis", "power-supply", "fuse"],
    next: ["drivers"],
  },
  {
    id: "drivers",
    title: "LX driver chain",
    layer: "cabinet",
    summary: "Drivers decode words and daisy-chain left to right, lower chassis first.",
    detail:
      "Each board owns a documented set of digits. Example from LX1440: LX33 (total runs/hits/errors), LX26 (top-line stats), LX7 (ball/strike/out). J2 in, J3 out, J7 = 18.9 VDC, word headers to ribbons. Jumpers set bank offsets so two identical boards can share a cabinet without address collisions. Last J3 may feed an ETN16 driver.",
    parts: ["lx-driver", "etn16-driver", "power-supply"],
    next: ["ribbons"],
  },
  {
    id: "ribbons",
    title: "Ribbon cables",
    layer: "display",
    summary: "Word headers to digit PCBs. Polarity and buffered/unbuffered must match the BOM.",
    detail:
      "Drive “LX#### DIGITS” sheets list qty, mask type (single/double), buffered vs unbuffered, and whether a single-segment driver or pull-up header is installed on a standoff. That BOM is the ground truth when you replace a digit.",
    parts: ["ribbon-cable", "led-digit"],
    next: ["digits"],
  },
  {
    id: "digits",
    title: "LED digits & indicators",
    layer: "display",
    summary: "7-segment boards, bullets, H/E characters, and optional ETN matrices.",
    detail:
      "LEDs mount on PCBs behind black aluminum masks. Epoxy shells poke through for viewing angle and take the hit from a foul ball. Outdoor boards are conformal-coated. Colors: red or amber outdoors; indoor basketball often adds green on period/player/foul. Dim from the console (50 steps) for night games.",
    parts: ["led-digit", "bullet-indicator", "he-character", "etn-module"],
    next: [],
  },
];

export const systemNodesById: Record<string, SystemNode> = Object.fromEntries(
  systemNodes.map((n) => [n.id, n]),
);

export const layers: { id: SystemNode["layer"]; label: string; hint: string }[] = [
  { id: "operator", label: "Sideline", hint: "Who runs the game" },
  { id: "control", label: "Console", hint: "Where the software lives" },
  { id: "path", label: "Data path", hint: "Cable or ScoreLink" },
  { id: "cabinet", label: "Inside the box", hint: "Power and drivers" },
  { id: "display", label: "Face", hint: "What the crowd sees" },
];
