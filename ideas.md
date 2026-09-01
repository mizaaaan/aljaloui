# Aljaloui Design Direction

## Three stylistic approaches

### Theme Name: Midnight Atelier
Very Brief Intro: A quiet-luxury interface inspired by private club interiors, precision-machined metal, and late-night city movement. It treats the car as an object of desire and the subscription as a calm, confident service.
Probability: 0.07

### Theme Name: Electric Riviera
Very Brief Intro: A brighter, kinetic mobility system that pairs deep navy with ultraviolet reflections, translucent panels, and fast editorial pacing. It feels aspirational, contemporary, and more overtly energetic.
Probability: 0.03

### Theme Name: Carbon Operating System
Very Brief Intro: A monochrome product interface with technical readouts, modular rails, and emerald signal lights. It makes premium mobility feel as legible and dependable as a beautifully engineered tool.
Probability: 0.08

## Selected approach: Midnight Atelier

### Design Movement
Contemporary quiet luxury with references to Swiss editorial typography, automotive instrumentation, and material-led hospitality design.

### Core Principles
1. **Confidence over noise:** use restraint, generous negative space, and short copy rather than loud sales language.
2. **Material intelligence:** surfaces should suggest smoked glass, satin metal, carbon fiber, and soft light without becoming glossy or overdecorated.
3. **Motion with purpose:** every transition should communicate a state change, a vehicle response, or a sense of forward movement.
4. **Asymmetric composition:** the page should feel art-directed, with a strong visual axis offset from the copy and staggered modules rather than a generic centered marketing grid.

### Color Philosophy
The base is near-black graphite so the vehicle and interface controls feel illuminated from within. A precise electric blue called **Aljaloui Current** signals action, navigation, and the technology layer, while restrained silver-blue text preserves a premium, nocturnal mood. Emerald is reserved for service confirmation and the chauffeur state, making trust and completion visually distinct from interaction.

### Layout Paradigm
Use a left editorial rail for navigation and context, a wide central stage for the vehicle, and a right-side diagnostic rail for stats, status, and the chauffeur toggle. Lower sections shift into a staggered horizontal rhythm: pricing cards travel laterally, feature copy sits opposite a large typographic statement, and the reservation CTA floats as a persistent anchor.

### Signature Elements
- A thin luminous route-line motif that threads through headings and status labels.
- Frosted graphite panels with hairline blue borders and soft internal glows.
- Compact instrument-style labels with wide tracking, paired with oversized italic display numerals for rates and performance data.

### Interaction Philosophy
Interactions should feel like operating a premium machine: immediate, tactile, and legible. Hover states expose hidden capability; toggles change the service promise, not just the color; cards respond with subtle lift and suspension-like movement; the configurator advances through focused choices with no visual clutter.

### Animation
Use 180–260ms transitions for controls, `cubic-bezier(0.23, 1, 0.32, 1)` for entering states, and slower 700–1100ms transforms only for the hero car rotation and atmospheric light. The car should drift and rotate on scroll in discrete scroll-linked increments, while the chauffeur avatar crossfades and rises 8px when enabled. Card hovers should use a 4px lift, slight image scale, and a brief blue underglow. Respect `prefers-reduced-motion` by freezing rotation and reducing reveal effects to opacity changes.

### Typography System
Use **Space Grotesk** for interface copy, labels, and navigation; use **DM Serif Display Italic** sparingly for oversized brand statements and the key subscription price. Headlines are tight and bold with -0.05em tracking. Supporting copy stays at 15–18px with 1.55 line-height. Instrument labels are 10–11px uppercase with 0.16em tracking.

### Brand Essence
Aljaloui is the monthly luxury mobility membership for people who want the right car and the right level of service without long-term ownership friction. Personality: **assured, exacting, effortless**.

### Brand Voice
Headlines are compact, declarative, and quietly provocative. CTAs sound like an invitation into a service, not a checkout button. Microcopy is specific and reassuring.

Example lines:
- “Your garage, on a better cadence.”
- “Choose the machine. We’ll handle the rest.”

### Wordmark & Logo
The wordmark should be set as a custom-feeling high-contrast lowercase lockup with a distinctive sliced “a” gesture. The symbol is a minimal **A-shaped route loop**: two diagonal strokes joined by a small electric-blue horizontal bridge, suggesting both a road interchange and a monogram. The symbol should be used in the header and as the favicon at a clearly visible size.

### Signature Brand Color
**Aljaloui Current — #5FE7FF**, a cool electric blue with enough cyan to feel automotive and enough restraint to avoid a gaming aesthetic. It belongs to the brand as the color of motion, access, and precise control.
