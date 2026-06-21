/* ===== MARKAN — Product Data Catalog ===== */

const MARKAN_PRODUCTS = [
  // ───── MIG Wire ─────
  {
    id: 1,
    name: 'ER70S-6 MIG Wire',
    category: 'MIG Wire',
    image: 'assets/images/welding-wire.png',
    badge: 'Best Seller',
    description: 'Premium copper-coated MIG welding wire for smooth feeding, stable arcs, and strong weld penetration on mild steel.',
    features: ['High Conductivity', 'Low Spatter', 'Smooth Feed', 'All Position'],
    specifications: {
      'Wire Type': 'Solid MIG Wire',
      'AWS Classification': 'ER70S-6',
      'Diameter': '0.8mm, 1.0mm, 1.2mm, 1.6mm',
      'Spool Weight': '5kg, 15kg, 25kg',
      'Coating': 'Copper Coated',
      'Shielding Gas': 'CO₂ / Ar+CO₂ Mix',
      'Tensile Strength': '480-560 MPa',
      'Current Type': 'DC+'
    },
    applications: [
      'General mild steel fabrication',
      'Automotive body and chassis welding',
      'Structural steel construction',
      'Pipe and tube welding',
      'Sheet metal work',
      'Machinery repair and maintenance'
    ],
    benefits: [
      'Excellent arc stability and minimal spatter',
      'Superior copper coating for consistent wire feeding',
      'High deposition rate for improved productivity',
      'Produces clean, strong welds with excellent appearance',
      'Suitable for all welding positions',
      'Low hydrogen content for crack-free welds'
    ]
  },
  {
    id: 2,
    name: 'ER70S-2 MIG Wire',
    category: 'MIG Wire',
    image: 'assets/images/welding-wire.png',
    badge: 'Premium',
    description: 'Triple-deoxidized MIG wire ideal for welding over rust, mill scale, and contaminated surfaces with superior arc performance.',
    features: ['Triple Deoxidized', 'Rust Tolerant', 'Stable Arc', 'Clean Welds'],
    specifications: {
      'Wire Type': 'Solid MIG Wire',
      'AWS Classification': 'ER70S-2',
      'Diameter': '0.8mm, 1.0mm, 1.2mm',
      'Spool Weight': '5kg, 15kg',
      'Coating': 'Copper Coated',
      'Shielding Gas': 'CO₂ / Ar+CO₂ Mix',
      'Tensile Strength': '480-550 MPa',
      'Current Type': 'DC+'
    },
    applications: [
      'Welding on rusty or contaminated surfaces',
      'Root pass welding in pipe joints',
      'General purpose mild steel welding',
      'Structural and fabrication work',
      'Repair and maintenance welding'
    ],
    benefits: [
      'Excellent performance on less-than-ideal surfaces',
      'Triple deoxidizers (Si, Ti, Zr) for cleaner welds',
      'Smooth, stable arc with minimal spatter',
      'Good impact toughness at low temperatures',
      'Reduces pre-cleaning requirements'
    ]
  },

  // ───── Flux Cored Wire ─────
  {
    id: 3,
    name: 'E71T-1 Flux Cored Wire',
    category: 'Flux Cored Wire',
    image: 'assets/images/welding-wire.png',
    badge: 'Popular',
    description: 'Gas-shielded flux cored wire for high deposition rate welding on mild and low-alloy steels in all positions.',
    features: ['High Deposition', 'All Position', 'Deep Penetration', 'Fast Welding'],
    specifications: {
      'Wire Type': 'Flux Cored (Gas Shielded)',
      'AWS Classification': 'E71T-1',
      'Diameter': '1.0mm, 1.2mm, 1.6mm',
      'Spool Weight': '15kg',
      'Shielding Gas': 'CO₂ / Ar+CO₂ (75/25)',
      'Tensile Strength': '490-670 MPa',
      'Current Type': 'DC+',
      'Polarity': 'DCEP'
    },
    applications: [
      'Heavy structural steel fabrication',
      'Shipbuilding and offshore structures',
      'Bridge and building construction',
      'Heavy equipment manufacturing',
      'Pressure vessel welding'
    ],
    benefits: [
      'High deposition rates up to 2x solid wire',
      'Excellent all-position welding capability',
      'Deep penetration for thick materials',
      'Self-shielding slag for excellent bead appearance',
      'Reduced welding time and labor costs'
    ]
  },
  {
    id: 4,
    name: 'E71T-GS Self-Shielded Wire',
    category: 'Flux Cored Wire',
    image: 'assets/images/welding-wire.png',
    badge: '',
    description: 'Self-shielded flux cored wire for outdoor welding without external shielding gas — ideal for field work and repairs.',
    features: ['No Gas Needed', 'Outdoor Use', 'Easy Operation', 'Portable'],
    specifications: {
      'Wire Type': 'Flux Cored (Self-Shielded)',
      'AWS Classification': 'E71T-GS',
      'Diameter': '0.8mm, 0.9mm, 1.0mm',
      'Spool Weight': '1kg, 5kg',
      'Shielding Gas': 'None Required',
      'Tensile Strength': '480-560 MPa',
      'Current Type': 'DC-',
      'Polarity': 'DCEN'
    },
    applications: [
      'Outdoor field welding and repairs',
      'Farm and agricultural equipment repair',
      'Fence and gate fabrication',
      'General maintenance welding',
      'DIY and hobby welding projects'
    ],
    benefits: [
      'No shielding gas cylinder required',
      'Perfect for outdoor and windy conditions',
      'Easy to use for beginners',
      'Portable and convenient for field work',
      'Good penetration on thin to medium steel'
    ]
  },

  // ───── Hard Facing Wire ─────
  {
    id: 5,
    name: 'Hard Facing MIG Wire',
    category: 'Hard Facing Wire',
    image: 'assets/images/welding-wire.png',
    badge: 'Specialty',
    description: 'Abrasion-resistant hard facing wire for rebuilding and protecting wear surfaces on heavy machinery and equipment.',
    features: ['Wear Resistant', 'High Hardness', 'Rebuild Parts', 'Long Life'],
    specifications: {
      'Wire Type': 'Hard Facing MIG Wire',
      'Hardness': '55-62 HRC',
      'Diameter': '1.2mm, 1.6mm',
      'Spool Weight': '15kg',
      'Shielding Gas': 'CO₂ / Ar+CO₂',
      'Deposit Hardness': '58-62 HRC',
      'Layers': '1-3 layers recommended',
      'Current Type': 'DC+'
    },
    applications: [
      'Mining and excavation equipment',
      'Crusher jaws and hammer mills',
      'Bulldozer blades and bucket teeth',
      'Agricultural tillage tools',
      'Cement and steel mill components',
      'Conveyor screws and mixer blades'
    ],
    benefits: [
      'Exceptional abrasion and impact resistance',
      'Extends component service life by 3-5x',
      'Reduces equipment downtime and replacement costs',
      'Easy application with standard MIG equipment',
      'Consistent hardness across multiple layers'
    ]
  },

  // ───── Mild Steel Welding Rods ─────
  {
    id: 6,
    name: 'E6013 Welding Electrode',
    category: 'Mild Steel Welding Rods',
    image: 'assets/images/welding-gun.png',
    badge: 'Best Seller',
    description: 'General purpose mild steel welding rod with easy arc striking, smooth operation, and excellent bead appearance.',
    features: ['Easy Strike', 'All Position', 'Smooth Arc', 'Clean Slag'],
    specifications: {
      'Type': 'SMAW Electrode',
      'AWS Classification': 'E6013',
      'Diameter': '2.5mm, 3.15mm, 4.0mm, 5.0mm',
      'Length': '350mm, 450mm',
      'Coating': 'Rutile (High Titania)',
      'Tensile Strength': '430-510 MPa',
      'Current Type': 'AC/DC±',
      'Packaging': '5kg, 20kg boxes'
    },
    applications: [
      'General mild steel fabrication',
      'Light structural welding',
      'Sheet metal and thin plate welding',
      'Automotive repair work',
      'Furniture and gate fabrication',
      'Educational and training purposes'
    ],
    benefits: [
      'Very easy arc initiation and re-striking',
      'Smooth, stable arc with minimal spatter',
      'Easy slag removal — self-peeling',
      'Excellent bead appearance and uniformity',
      'Works on both AC and DC power sources',
      'Ideal for beginners and professionals alike'
    ]
  },
  {
    id: 7,
    name: 'E7018 Low Hydrogen Electrode',
    category: 'Mild Steel Welding Rods',
    image: 'assets/images/welding-gun.png',
    badge: 'Premium',
    description: 'Low hydrogen electrode for critical structural applications requiring crack-free, high-strength welds.',
    features: ['Low Hydrogen', 'High Strength', 'Crack Free', 'X-Ray Quality'],
    specifications: {
      'Type': 'SMAW Electrode',
      'AWS Classification': 'E7018',
      'Diameter': '2.5mm, 3.15mm, 4.0mm, 5.0mm',
      'Length': '350mm, 450mm',
      'Coating': 'Basic (Low Hydrogen)',
      'Tensile Strength': '490-600 MPa',
      'Current Type': 'AC/DC+',
      'Packaging': '5kg, 20kg (vacuum sealed)'
    },
    applications: [
      'Critical structural steel welding',
      'Pressure vessel fabrication',
      'Bridge and building construction',
      'Boiler and power plant equipment',
      'Heavy machinery manufacturing',
      'Pipeline welding'
    ],
    benefits: [
      'Ultra-low hydrogen content prevents cracking',
      'Superior mechanical properties and toughness',
      'X-ray quality welds for critical joints',
      'Excellent impact strength at low temperatures',
      'Smooth, quiet arc with easy slag removal',
      'Meets stringent code requirements'
    ]
  },

  // ───── Welding Accessories ─────
  {
    id: 8,
    name: 'MIG Welding Torch',
    category: 'Welding Accessories',
    image: 'assets/images/welding-gun.png',
    badge: 'Best Seller',
    description: 'Ergonomic MIG welding torch with heat-resistant handle, flexible cable, and reliable gas flow for professional welding.',
    features: ['Heat Resistant', 'Ergonomic Grip', 'Durable Build', 'Pro Performance'],
    specifications: {
      'Type': 'MIG/MAG Welding Torch',
      'Amperage Rating': '250A / 350A / 500A',
      'Duty Cycle': '60% at rated amperage',
      'Cable Length': '3m, 4m, 5m',
      'Connector': 'Euro / Binzel type',
      'Cooling': 'Air Cooled / Water Cooled',
      'Wire Size': '0.8mm - 1.6mm',
      'Gas Flow': 'Built-in gas valve'
    },
    applications: [
      'Industrial MIG/MAG welding',
      'Automated and robotic welding',
      'Heavy fabrication workshops',
      'Automotive manufacturing',
      'General metal fabrication'
    ],
    benefits: [
      'Ergonomic design reduces welder fatigue',
      'High-temperature resistant swan neck',
      'Quick-change consumable system',
      'Flexible cable for easy maneuverability',
      'Compatible with major welding machine brands'
    ]
  },
  {
    id: 9,
    name: 'Electrode Holder (500A)',
    category: 'Welding Accessories',
    image: 'assets/images/welding-accessories.png',
    badge: '',
    description: 'Heavy-duty electrode holder with insulated handle and spring-loaded jaw for secure rod clamping.',
    features: ['500A Rating', 'Insulated', 'Spring Jaw', 'Heavy Duty'],
    specifications: {
      'Type': 'Electrode Holder',
      'Amperage Rating': '500A',
      'Electrode Size': '2.5mm - 6.0mm',
      'Handle': 'Heat-resistant insulated',
      'Jaw Type': 'Spring-loaded brass',
      'Cable Connection': 'Screw type',
      'Weight': '450g',
      'Standard': 'IS 9936'
    },
    applications: [
      'Manual metal arc welding (SMAW)',
      'Heavy industrial welding',
      'Construction site welding',
      'Workshop and fabrication',
      'Maintenance and repair'
    ],
    benefits: [
      'Full 500A current carrying capacity',
      'Cool, insulated grip for operator comfort',
      'Positive electrode clamping at any angle',
      'Durable construction for heavy use',
      'Easy electrode insertion and removal'
    ]
  },
  {
    id: 10,
    name: 'Earth Clamp (500A)',
    category: 'Welding Accessories',
    image: 'assets/images/welding-accessories.png',
    badge: '',
    description: 'Heavy-duty brass earth clamp with strong spring tension for reliable ground connection during welding.',
    features: ['500A Rating', 'Brass Jaws', 'Strong Grip', 'Reliable'],
    specifications: {
      'Type': 'Earth/Ground Clamp',
      'Amperage Rating': '500A',
      'Jaw Material': 'Brass',
      'Jaw Opening': '50mm max',
      'Spring': 'Heavy-duty steel',
      'Cable Connection': 'Screw type',
      'Weight': '380g'
    },
    applications: [
      'All types of arc welding processes',
      'Workshop and site welding',
      'Heavy fabrication',
      'Pipe welding',
      'Structural steel work'
    ],
    benefits: [
      'Excellent electrical conductivity via brass jaws',
      'Strong spring provides secure workpiece contact',
      'Prevents arc blow from poor grounding',
      'Robust construction for daily industrial use',
      'Wide jaw opening for various workpiece sizes'
    ]
  },
  {
    id: 11,
    name: 'Welding Helmet (Auto-Darkening)',
    category: 'Welding Accessories',
    image: 'assets/images/welding-accessories.png',
    badge: 'New',
    description: 'Professional auto-darkening welding helmet with variable shade, grinding mode, and solar-powered operation.',
    features: ['Auto Darkening', 'Solar Powered', 'Grind Mode', 'Lightweight'],
    specifications: {
      'Type': 'Auto-Darkening Welding Helmet',
      'Viewing Area': '100 × 53mm',
      'Light State': 'DIN 4',
      'Dark State': 'DIN 9-13 (Variable)',
      'Response Time': '1/25,000 sec',
      'Power': 'Solar + CR2032 battery',
      'Weight': '450g',
      'Standards': 'CE EN379 / ANSI Z87.1'
    },
    applications: [
      'MIG, TIG, MMA, and plasma welding',
      'Grinding and cutting operations',
      'Professional workshop use',
      'Field and site welding',
      'Multi-process welding environments'
    ],
    benefits: [
      'Instant auto-darkening protects eyes',
      'Variable shade suits different processes',
      'Grinding mode allows use without flipping',
      'Solar powered with battery backup',
      'Comfortable headgear with adjustable fit'
    ]
  },
  {
    id: 12,
    name: 'Welding Safety Goggles',
    category: 'Welding Accessories',
    image: 'assets/images/welding-accessories.png',
    badge: '',
    description: 'Impact-resistant welding safety goggles with flip-up dark lens for gas welding and cutting operations.',
    features: ['Flip-Up Lens', 'Impact Proof', 'Comfortable', 'Gas Welding'],
    specifications: {
      'Type': 'Welding Safety Goggles',
      'Lens Shade': 'DIN 5 (flip-up dark)',
      'Clear Lens': 'Polycarbonate',
      'Frame': 'PVC soft frame',
      'Ventilation': 'Indirect vented',
      'Strap': 'Adjustable elastic',
      'Standards': 'CE EN166 / EN175'
    },
    applications: [
      'Oxy-acetylene gas welding',
      'Gas cutting and brazing',
      'Torch soldering',
      'Light grinding operations',
      'General workshop eye protection'
    ],
    benefits: [
      'Flip-up lens for quick transition',
      'Comfortable PVC frame with soft seal',
      'Scratch-resistant polycarbonate lens',
      'Indirect ventilation prevents fogging',
      'Affordable daily protection'
    ]
  },

  // ───── Cutting Discs ─────
  {
    id: 13,
    name: 'Metal Cutting Disc (4")',
    category: 'Cutting Discs',
    image: '',
    badge: 'Best Seller',
    description: 'High-performance 4-inch cutting disc for fast, clean cuts on steel, stainless steel, and metal profiles.',
    features: ['Fast Cutting', 'Clean Edge', 'Long Life', 'Low Vibration'],
    specifications: {
      'Type': 'Flat Cutting Disc',
      'Diameter': '105mm (4 inch)',
      'Thickness': '1.0mm / 1.2mm',
      'Bore': '16mm',
      'Max RPM': '15,300',
      'Material': 'Aluminum Oxide',
      'Bond': 'Resinoid Reinforced',
      'Use': 'Steel, Metal, SS'
    },
    applications: [
      'Steel pipe and tube cutting',
      'Angle iron and flat bar cutting',
      'Sheet metal trimming',
      'Rebar cutting',
      'General metal fabrication',
      'Automotive repair'
    ],
    benefits: [
      'Ultra-thin profile for fast, efficient cuts',
      'Minimal material waste and heat generation',
      'Double reinforced mesh for safety',
      'Clean, burr-free cut edges',
      'Long disc life with consistent performance'
    ]
  },
  {
    id: 14,
    name: 'Metal Cutting Disc (14")',
    category: 'Cutting Discs',
    image: '',
    badge: '',
    description: 'Heavy-duty 14-inch cutting disc for chop saws and cut-off machines, designed for high-volume metal cutting.',
    features: ['Heavy Duty', '14 inch', 'Chop Saw', 'High Volume'],
    specifications: {
      'Type': 'Flat Cutting Disc',
      'Diameter': '355mm (14 inch)',
      'Thickness': '3.0mm',
      'Bore': '25.4mm',
      'Max RPM': '4,400',
      'Material': 'Aluminum Oxide',
      'Bond': 'Resinoid Reinforced',
      'Use': 'Steel, Metal'
    },
    applications: [
      'Chop saw metal cutting',
      'Heavy structural steel cutting',
      'Pipe cutting in fabrication shops',
      'Construction site steel cutting',
      'Industrial production cutting'
    ],
    benefits: [
      'Designed for stationary cut-off machines',
      'Fast cutting action on heavy sections',
      'Triple-reinforced for maximum safety',
      'Consistent performance throughout disc life',
      'Economical high-volume cutting'
    ]
  },

  // ───── Grinding Discs ─────
  {
    id: 15,
    name: 'Grinding Disc (4")',
    category: 'Grinding Discs',
    image: '',
    badge: 'Popular',
    description: 'Depressed center grinding disc for fast stock removal, weld grinding, and surface preparation on metal.',
    features: ['Fast Grinding', 'Weld Prep', 'Depressed Center', 'Durable'],
    specifications: {
      'Type': 'Depressed Center Grinding Disc',
      'Diameter': '100mm (4 inch)',
      'Thickness': '6.0mm',
      'Bore': '16mm',
      'Max RPM': '15,300',
      'Grit': '24 / 36 / 60',
      'Material': 'Aluminum Oxide / Zirconia',
      'Use': 'Metal, Steel'
    },
    applications: [
      'Weld bead grinding and blending',
      'Surface preparation before welding',
      'Deburring and chamfering',
      'Rust and scale removal',
      'General metal grinding',
      'Casting and forging cleanup'
    ],
    benefits: [
      'Aggressive stock removal rate',
      'Cool grinding action reduces workpiece heat',
      'Long-lasting abrasive grain',
      'Depressed center allows flush grinding',
      'Reinforced for safe, vibration-free operation'
    ]
  },
  {
    id: 16,
    name: 'Grinding Disc (9")',
    category: 'Grinding Discs',
    image: '',
    badge: '',
    description: 'Large 9-inch grinding disc for heavy stock removal on structural steel, castings, and large weldments.',
    features: ['Heavy Duty', '9 inch', 'Fast Removal', 'Industrial'],
    specifications: {
      'Type': 'Depressed Center Grinding Disc',
      'Diameter': '230mm (9 inch)',
      'Thickness': '6.0mm',
      'Bore': '22.23mm',
      'Max RPM': '6,650',
      'Grit': '24 / 36',
      'Material': 'Aluminum Oxide',
      'Use': 'Metal, Steel'
    },
    applications: [
      'Large structural steel grinding',
      'Heavy weld removal and blending',
      'Casting gate and riser removal',
      'Ship and tank fabrication',
      'Heavy equipment repair'
    ],
    benefits: [
      'Large surface area for faster grinding',
      'Heavy-duty construction for demanding work',
      'Aggressive material removal on thick sections',
      'Balanced design reduces operator fatigue',
      'Suitable for large angle grinders'
    ]
  },

  // ───── Flap Discs ─────
  {
    id: 17,
    name: 'Flap Disc (4")',
    category: 'Flap Discs',
    image: '',
    badge: 'Popular',
    description: 'Premium zirconia flap disc for blending, finishing, and light grinding on metal and stainless steel.',
    features: ['Smooth Finish', 'Zirconia', 'Blend & Finish', 'Low Noise'],
    specifications: {
      'Type': 'Flap Disc (Type 27/29)',
      'Diameter': '100mm (4 inch)',
      'Bore': '16mm',
      'Grit': '40# / 60# / 80# / 120#',
      'Max RPM': '15,300',
      'Abrasive': 'Zirconia Alumina',
      'Backing': 'Fiberglass',
      'Use': 'Metal, Steel, SS'
    },
    applications: [
      'Weld blending and finishing',
      'Surface preparation and cleaning',
      'Edge chamfering and deburring',
      'Paint and coating removal',
      'Stainless steel finishing',
      'Decorative metalwork finishing'
    ],
    benefits: [
      'Combines grinding and finishing in one step',
      'Produces smoother finish than grinding discs',
      'Self-sharpening zirconia abrasive lasts longer',
      'Lower noise and vibration than grinding discs',
      'Multiple grit options for various finishes'
    ]
  },
  {
    id: 18,
    name: 'Flap Disc (7")',
    category: 'Flap Discs',
    image: '',
    badge: '',
    description: 'Heavy-duty 7-inch flap disc for large surface blending and finishing applications on steel and metal.',
    features: ['7 inch', 'Heavy Duty', 'Large Area', 'Fast Finish'],
    specifications: {
      'Type': 'Flap Disc (Type 27)',
      'Diameter': '180mm (7 inch)',
      'Bore': '22.23mm',
      'Grit': '40# / 60# / 80#',
      'Max RPM': '8,500',
      'Abrasive': 'Zirconia Alumina',
      'Backing': 'Fiberglass',
      'Use': 'Metal, Steel'
    },
    applications: [
      'Large area surface blending',
      'Heavy weld finishing',
      'Structural steel preparation',
      'Tank and vessel finishing',
      'Industrial maintenance'
    ],
    benefits: [
      'Large disc covers more area per pass',
      'Reduces finishing time on big projects',
      'Premium zirconia for extended life',
      'Excellent surface finish quality',
      'Compatible with 7-inch angle grinders'
    ]
  },

  // ───── Fiber Discs ─────
  {
    id: 19,
    name: 'Fiber Disc (4")',
    category: 'Fiber Discs',
    image: '',
    badge: '',
    description: 'Resin fiber disc for aggressive grinding, weld removal, and surface conditioning on steel and metal.',
    features: ['Aggressive Cut', 'Weld Removal', 'Fiber Backed', 'Versatile'],
    specifications: {
      'Type': 'Resin Fiber Disc',
      'Diameter': '100mm (4 inch)',
      'Bore': '16mm',
      'Grit': '24# / 36# / 60# / 80# / 120#',
      'Max RPM': '15,300',
      'Abrasive': 'Aluminum Oxide / Zirconia',
      'Backing': 'Vulcanized Fiber',
      'Use': 'Metal, Steel'
    },
    applications: [
      'Weld grinding and removal',
      'Surface cleaning and preparation',
      'Rust and paint stripping',
      'Deburring and edge rounding',
      'Stock removal on castings',
      'General metalworking'
    ],
    benefits: [
      'High stock removal rate',
      'Flexible fiber backing conforms to surfaces',
      'Multiple grit options for rough to fine work',
      'Cooler cutting reduces discoloration',
      'Economical choice for heavy grinding tasks'
    ]
  },
  {
    id: 20,
    name: 'Fiber Disc (7")',
    category: 'Fiber Discs',
    image: '',
    badge: '',
    description: 'Large 7-inch fiber disc for heavy-duty stock removal and surface preparation on large steel structures.',
    features: ['7 inch', 'Heavy Stock Removal', 'Durable', 'Industrial'],
    specifications: {
      'Type': 'Resin Fiber Disc',
      'Diameter': '180mm (7 inch)',
      'Bore': '22.23mm',
      'Grit': '24# / 36# / 60#',
      'Max RPM': '8,500',
      'Abrasive': 'Zirconia Alumina',
      'Backing': 'Vulcanized Fiber',
      'Use': 'Metal, Steel'
    },
    applications: [
      'Heavy structural steel grinding',
      'Large weld removal',
      'Shipbuilding surface prep',
      'Heavy equipment maintenance',
      'Foundry work'
    ],
    benefits: [
      'Large disc size for bigger workpieces',
      'Zirconia grain for maximum life',
      'High material removal rate',
      'Fiber backing provides flexibility',
      'Suitable for heavy industrial applications'
    ]
  },

  // ───── Wire Brushes ─────
  {
    id: 21,
    name: 'Cup Wire Brush (4")',
    category: 'Wire Brushes',
    image: '',
    badge: '',
    description: 'Crimped cup wire brush for angle grinders — ideal for rust, paint, and scale removal from metal surfaces.',
    features: ['Cup Type', 'Crimped Wire', 'Rust Removal', 'Paint Strip'],
    specifications: {
      'Type': 'Cup Wire Brush',
      'Diameter': '100mm (4 inch)',
      'Wire': 'Crimped Steel Wire',
      'Wire Gauge': '0.3mm',
      'Thread': 'M14 x 2.0',
      'Max RPM': '12,500',
      'Material': 'Carbon Steel',
      'Use': 'Rust, Paint, Scale'
    },
    applications: [
      'Rust and corrosion removal',
      'Paint and coating stripping',
      'Weld spatter cleaning',
      'Surface preparation before painting',
      'Descaling and cleaning castings'
    ],
    benefits: [
      'Effective removal of rust, paint, and scale',
      'Crimped wire provides controlled, smooth action',
      'Durable construction for extended use',
      'Standard M14 thread fits most angle grinders',
      'Leaves clean surface ready for finishing'
    ]
  },
  {
    id: 22,
    name: 'Twist Knot Wire Brush (4")',
    category: 'Wire Brushes',
    image: '',
    badge: '',
    description: 'Heavy-duty twist knot cup brush for aggressive cleaning, heavy rust removal, and weld preparation.',
    features: ['Twist Knot', 'Aggressive', 'Heavy Rust', 'Weld Prep'],
    specifications: {
      'Type': 'Twist Knot Cup Brush',
      'Diameter': '100mm (4 inch)',
      'Wire': 'Twist Knotted Steel Wire',
      'Wire Gauge': '0.5mm',
      'Thread': 'M14 x 2.0',
      'Max RPM': '12,500',
      'Material': 'Carbon Steel / Stainless Steel',
      'Use': 'Heavy Rust, Scale, Weld Slag'
    },
    applications: [
      'Heavy rust and mill scale removal',
      'Weld slag and spatter removal',
      'Aggressive surface preparation',
      'Cleaning heavily corroded metal',
      'Edge and corner cleaning'
    ],
    benefits: [
      'Twist knot design for maximum aggression',
      'Removes heavy buildup quickly',
      'Longer wire life than crimped brushes',
      'Excellent for tough cleaning tasks',
      'Available in steel and stainless steel wire'
    ]
  },
  {
    id: 23,
    name: 'End Wire Brush',
    category: 'Wire Brushes',
    image: '',
    badge: '',
    description: 'Pencil-type end wire brush for cleaning hard-to-reach areas, internal bores, and tight spaces.',
    features: ['Pencil Type', 'Tight Spaces', 'Detail Work', '6mm Shank'],
    specifications: {
      'Type': 'End / Pencil Wire Brush',
      'Diameter': '25mm',
      'Wire': 'Crimped Steel Wire',
      'Wire Gauge': '0.3mm',
      'Shank': '6mm',
      'Max RPM': '25,000',
      'Material': 'Carbon Steel',
      'Use': 'Detail cleaning'
    },
    applications: [
      'Internal bore cleaning',
      'Weld root cleaning',
      'Cleaning small cavities and grooves',
      'Die and mold maintenance',
      'Detailed surface preparation'
    ],
    benefits: [
      'Reaches tight, confined areas',
      '6mm shank fits standard die grinders',
      'Precision cleaning for detailed work',
      'Compact size for intricate applications',
      'Durable wire for extended use'
    ]
  }
];

// ───── Accessories Data (for accessories page) ─────
const MARKAN_ACCESSORIES = [
  {
    id: 'acc-1',
    name: 'MIG Welding Machine (250A)',
    category: 'Welding Machines',
    image: 'assets/images/welding-accessories.png',
    description: 'Industrial-grade IGBT MIG welding machine with digital display, wire feeder, and multi-process capability.',
    features: ['250A Output', 'IGBT Technology', 'Digital Display', 'Multi-Process']
  },
  {
    id: 'acc-2',
    name: 'MIG Welding Machine (400A)',
    category: 'Welding Machines',
    image: 'assets/images/welding-accessories.png',
    description: 'Heavy-duty 400A MIG/MAG welding machine for production welding with separate wire feeder unit.',
    features: ['400A Output', 'Heavy Duty', 'Separate Feeder', 'Industrial']
  },
  {
    id: 'acc-3',
    name: 'TIG Welding Machine (200A)',
    category: 'Welding Machines',
    image: 'assets/images/welding-accessories.png',
    description: 'Precision TIG welding machine with pulse function, HF start, and AC/DC capability for all metals.',
    features: ['200A', 'AC/DC', 'Pulse TIG', 'HF Start']
  },
  {
    id: 'acc-4',
    name: 'Welding Cable (70mm²)',
    category: 'Tools',
    image: 'assets/images/welding-accessories.png',
    description: 'Flexible copper welding cable with rubber insulation for high-current welding applications.',
    features: ['70mm²', 'Pure Copper', 'Flexible', 'Rubber Insulated']
  },
  {
    id: 'acc-5',
    name: 'Cable Lug Set',
    category: 'Tools',
    image: 'assets/images/welding-accessories.png',
    description: 'Copper cable lugs for secure cable-to-machine connections. Multiple sizes available.',
    features: ['Copper', 'Multiple Sizes', 'Crimp Type', 'Heavy Duty']
  },
  {
    id: 'acc-6',
    name: 'Gas Regulator (Argon/CO₂)',
    category: 'Tools',
    image: 'assets/images/welding-accessories.png',
    description: 'Dual-gauge gas regulator with flow meter for argon, CO₂, and mixed shielding gases.',
    features: ['Dual Gauge', 'Flow Meter', 'Argon/CO₂', 'Brass Body']
  },
  {
    id: 'acc-7',
    name: 'Welding Gloves (Leather)',
    category: 'Safety Gear',
    image: 'assets/images/welding-accessories.png',
    description: 'Premium split leather welding gloves with Kevlar stitching for heat protection and dexterity.',
    features: ['Split Leather', 'Kevlar Stitch', 'Heat Resistant', 'Durable']
  },
  {
    id: 'acc-8',
    name: 'Welding Apron (Leather)',
    category: 'Safety Gear',
    image: 'assets/images/welding-accessories.png',
    description: 'Full-length leather welding apron for protection against sparks, spatter, and heat.',
    features: ['Full Length', 'Split Leather', 'Spark Proof', 'Adjustable']
  },
  {
    id: 'acc-9',
    name: 'Chipping Hammer',
    category: 'Tools',
    image: 'assets/images/welding-accessories.png',
    description: 'Spring-handle chipping hammer for slag removal after stick welding with comfortable grip.',
    features: ['Spring Handle', 'Slag Removal', 'Dual Head', 'Comfortable']
  },
  {
    id: 'acc-10',
    name: 'Wire Brush (Hand)',
    category: 'Tools',
    image: 'assets/images/welding-accessories.png',
    description: 'Stainless steel hand wire brush for post-weld cleaning and surface preparation.',
    features: ['SS Wire', 'Hand Brush', 'Weld Cleaning', 'Ergonomic']
  },
  {
    id: 'acc-11',
    name: 'Contact Tips (Pack of 10)',
    category: 'Consumables',
    image: 'assets/images/welding-accessories.png',
    description: 'Precision copper contact tips for MIG torches. Available in 0.8mm, 1.0mm, and 1.2mm.',
    features: ['Copper', 'Pack of 10', 'Precision Bore', 'Long Life']
  },
  {
    id: 'acc-12',
    name: 'Gas Nozzle Set',
    category: 'Consumables',
    image: 'assets/images/welding-accessories.png',
    description: 'Replacement gas nozzles for MIG welding torches. Conical and cylindrical types available.',
    features: ['Multiple Types', 'Copper', 'Spatter Resistant', 'Easy Fit']
  }
];

// ───── Helper Functions ─────

function getWhatsAppLink(productName) {
  const message = encodeURIComponent(
    `Hello Markan Team,\nI am interested in the product: ${productName}.\nPlease share pricing and more information.`
  );
  return `https://wa.me/919998032794?text=${message}`;
}

function getEmailLink(productName) {
  const subject = encodeURIComponent(`Product Inquiry - ${productName}`);
  const body = encodeURIComponent(
    `Hello Markan Team,\n\nI am interested in ${productName}.\n\nPlease share pricing, specifications, and availability.\n\nThank you.`
  );
  return `mailto:info@markanweld.com?subject=${subject}&body=${body}`;
}

function getProductById(id) {
  return MARKAN_PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'All') return MARKAN_PRODUCTS;
  return MARKAN_PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return MARKAN_PRODUCTS;
  return MARKAN_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function getCategories() {
  return ['All', ...new Set(MARKAN_PRODUCTS.map(p => p.category))];
}

function getAccessoryCategories() {
  return ['All', ...new Set(MARKAN_ACCESSORIES.map(a => a.category))];
}

function filterAccessories(category) {
  if (!category || category === 'All') return MARKAN_ACCESSORIES;
  return MARKAN_ACCESSORIES.filter(a => a.category === category);
}

function getProductPlaceholderSVG(category) {
  const colors = {
    'MIG Wire': '#1E88E5',
    'Flux Cored Wire': '#42A5F5',
    'Hard Facing Wire': '#FF5722',
    'Mild Steel Welding Rods': '#FF7043',
    'Welding Accessories': '#1E88E5',
    'Cutting Discs': '#4CAF50',
    'Grinding Discs': '#66BB6A',
    'Flap Discs': '#FFC107',
    'Fiber Discs': '#FF9800',
    'Wire Brushes': '#9C27B0'
  };
  const color = colors[category] || '#1E88E5';
  const initial = category ? category.charAt(0) : 'M';
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#0d1b2a" width="400" height="300"/><rect fill="${color}" opacity="0.15" x="100" y="50" width="200" height="200" rx="20"/><text fill="${color}" font-family="Arial,sans-serif" font-size="72" font-weight="bold" text-anchor="middle" x="200" y="170">${initial}</text><text fill="rgba(255,255,255,0.4)" font-family="Arial,sans-serif" font-size="14" text-anchor="middle" x="200" y="220">${category || 'MARKAN'}</text></svg>`)}`;
}
