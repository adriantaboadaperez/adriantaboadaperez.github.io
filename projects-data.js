const PROJECTS = {
  1: {
    num: "01",
    category: "Automation + Controls",
    tagClass: "tag-industry",
    tagLabel: "Automation",
    visualClass: "v-swage",
    visualLabel: "AUTO",
    title: "TUBE SWAGING AUTOMATION",
    org: "Vita Needle Company · Sep 2025 – May 2026",
    teaser: "Built an automation device for Vita Needle's tube swaging line — actuator, gripper, and a full control system with HMI and E-STOP safety.",
    body: [
      "Vita Needle's tube-swaging process relied heavily on manual loading and positioning, which introduced inconsistency in alignment and repeatability. They asked our team to build a benchtop system that could handle the loading and positioning steps in a more controlled way.",
      "On the mechanical side, I built the actuation around a lead-screw slide and a pneumatic gripper, and designed custom gripper jaws to hold the needle stock during loading. The gripper pads were CNC-machined for precise part contact, while the supporting structure used 3D-printed fixtures to speed up iteration, all mounted to a machined aluminum base.",
      "On the electronics side, I developed the full control system and HMI around a microcontroller: Hall-effect sensors for position referencing and homing, a solenoid-driven gripper, an OLED display and LED/buzzer status indicators, and start/stop controls for the operator. Power and control electronics were split into separate enclosures to keep higher-voltage wiring away from the low-voltage logic, and a fail-safe E-STOP circuit built from relays and contactors handled operator safety.",
      "The finished prototype replaced the manual feeding process and hit 98% consistent, high-quality swages in testing."
    ],
    pills: ["Lead-Screw Actuator","Pneumatic Gripper","Arduino","Hall Effect","HMI","E-STOP Safety Circuit","KiCad","CNC Machining"],
    link: { text: "Watch demo video", url: "https://drive.google.com/file/d/1UAgbVsmxJIc7hvlyhx7n9pGn8E1jxNZ2/view?usp=sharing" }
  },
  2: {
    num: "02",
    category: "Mechanical Design + Electronics",
    tagClass: "tag-burpg",
    tagLabel: "Propulsion",
    visualClass: "v-rocket",
    visualLabel: "PUMP",
    title: "CENTRIFUGAL FUEL PUMP",
    org: "BU Rocket Propulsion Group (BURPG) · Oct 2025 – Dec 2025",
    teaser: "Sized, modeled, and built a centrifugal fuel pump for BURPG's propulsion system, plus a custom 555-timer/H-bridge motor driver.",
    body: [
      "BURPG needed a way to refuel a liquid bipropellant propulsion system between test loads, so I designed a compact centrifugal pump assembly to do it. The target spec was a 12V system delivering at least 75 mL/s, roughly 21 ft of head, and enough capacity for 4+ fuel loads per charge.",
      "I sized the pump from first principles rather than guessing at a part — Bernoulli's head-loss equation, continuity, pump power/efficiency relations, and linear momentum conservation to get to a target impeller radius, outlet velocity, and pump diameter. From there I optimized the impeller geometry for the flow target before finalizing the design in SolidWorks.",
      "The housing and impeller were 3D-printed to keep prototyping fast, with a custom aluminum shaft turned on the lathe for the motor-impeller interface, and a brushless DC motor for the drive.",
      "For testing, I also designed a standalone analog driver: a 555-timer PWM stage (adjustable duty cycle via potentiometer) feeds into a mechanical forward/reverse switch, which routes the signal into a MOSFET H-bridge that drives the motor bidirectionally."
    ],
    pills: ["SolidWorks","BLDC Motor","Fluid Dynamics","3D Printing","Lathe & Mill","555 Timer PWM","H-Bridge","KiCad"]
  },
  3: {
    num: "03",
    category: "Propulsion + Embedded",
    tagClass: "tag-burpg",
    tagLabel: "Propulsion",
    visualClass: "v-nozzle",
    visualLabel: "FIRE",
    title: "ROCKET NOZZLE & IGNITION CONTROL SYSTEM",
    org: "BU Rocket Propulsion Group (BURPG) · Sep 2024 – Dec 2024",
    teaser: "Modeled and FEA-tested rocket nozzles for a 12% thrust gain, then built the flight computer that fired them.",
    body: [
      "I modeled several fixed-geometry rocket nozzles in SolidWorks to compare thrust performance, along with a custom adapter interface to mate cleanly with BURPG's propulsion system. Iterative FEA passes on each candidate flagged thermal and structural risk areas and guided geometry changes for safety margin, landing on a design with a simulated ~12% thrust efficiency gain over baseline.",
      "The selected nozzle was 3D-printed and test-fit against the real adapter hardware before any live testing.",
      "For the test system, I built a flight computer around a microcontroller running code I wrote in C++, using two NMOS driver stages to actuate an electronic match igniter and a solenoid fuel valve in sequence. An SD card module logged thrust data from a load cell during firings.",
      "That flight computer coordinated valve timing, ignition, and data capture during real nozzle firings on a test rig, which is what let us actually validate the nozzle at target conditions instead of just in simulation."
    ],
    pills: ["SolidWorks","FEA","Arduino Nano","C++","Load Cell DAQ","Propulsion Theory"]
  },
  4: {
    num: "04",
    category: "Mechanical + Controls",
    tagClass: "tag-mech",
    tagLabel: "Biomedical",
    visualClass: "v-blood",
    visualLabel: "PUMP",
    title: "PERISTALTIC BLOOD PUMP",
    org: "Boston University · Biomedical Engineering Lab",
    teaser: "Machined structural components and built the analog driver for a peristaltic blood pump prototype.",
    body: [
      "I contributed to a peristaltic pump prototype built for biomedical lab use, aimed at a compact, mechanically driven pumping system.",
      "My part of the work was mostly on the fabrication and drive side: machining key structural components in aluminum on the lathe and mill for precise motor alignment, and developing an analog motor driver circuit for velocity control so we could tune flow rate during testing."
    ],
    pills: ["Lathe & Mill","Analog Circuits","Motor Control"]
  },
  5: {
    num: "05",
    category: "Electromechanical Design",
    tagClass: "tag-embedded",
    tagLabel: "Electromech",
    visualClass: "v-draw",
    visualLabel: "DRAW",
    title: "TWO-COLOR DRAWING MACHINE",
    org: "Boston University · Personal Project",
    teaser: "A two-axis CNC drawing machine with a custom pen-changer that turns any PNG into a two-color drawing.",
    body: [
      "This one started as a side project — a two-axis CNC drawing machine that could take any image and draw it in two colors with clean, repeatable pen registration. I built the frame out of aluminum extrusion and designed a 3D-printed pen-changing mechanism to swap between the two pens mid-drawing.",
      "The software side went through a few steps: generating drawing vectors from source images, running them through Python scripts I wrote to process and convert them, then feeding the resulting G-code through Repetier-Host for motion control.",
      "Getting consistent pen alignment across color changes took more tuning than the mechanical build did, honestly — but the end result reliably converts a PNG into a clean two-color drawing."
    ],
    pills: ["Python","G-code","Stepper Motors","3D Printing","CNC"]
  },
  6: {
    num: "06",
    category: "Instrumentation + Analysis",
    tagClass: "tag-dynamics",
    tagLabel: "Dynamics",
    visualClass: "v-calib",
    visualLabel: "FREQ",
    title: "CALIBRATION OF A MECHANICAL SYSTEM",
    org: "Boston University · Coursework",
    teaser: "Instrumented a spring-mass oscillator rig to extract resonance behavior and estimate dynamic system parameters.",
    body: [
      "For this project I built and instrumented a spring-mass oscillator test rig using an optical displacement sensor and a DAQ board, then wrote a calibration pipeline to turn raw sensor voltage and driving-frequency settings into net displacement data.",
      "Sweeping the driving frequency and measuring the response gave the expected resonance behavior: the magnitude ratio climbed approaching resonance, peaked closest to it, then fell off at higher frequencies. Phase lag tracked the theoretical model too — near 0° at low frequency, around 90° near resonance, and trending toward 180° at higher frequencies.",
      "From the frequency-response data I estimated the system's dynamic parameters — spring constant, natural frequency, damping ratio, and damping constant — with propagated measurement uncertainty, and checked them against the theoretical model."
    ],
    pills: ["MATLAB","DAQ","Vibrations","Uncertainty Analysis"]
  },
  7: {
    num: "07",
    category: "Simulation + Analysis",
    tagClass: "tag-cfd",
    tagLabel: "Simulation",
    visualClass: "v-cad",
    visualLabel: "SIM",
    title: "CAD & SIMULATION HIGHLIGHTS",
    org: "Boston University · Coursework / Research",
    teaser: "COMSOL, OpenFOAM, and SolidWorks FEA work spanning heat transfer, CFD, and structural validation.",
    body: [
      "A collection of independent modeling and simulation work across a few different classes and projects, all built in SolidWorks or Fusion — part design, multi-component assemblies, and manufacturing drawings.",
      "In COMSOL, I built a transient conjugate heat transfer model of a heated fluid past a sphere, comparing surface and center temperature over time across a range of Reynolds numbers and checking the results against the theoretical lumped-capacitance model. From the simulated surface heat flux and temperature difference, I also computed the local convective heat transfer coefficient (h) around the sphere at each Reynolds number.",
      "Separately, I ran OpenFOAM CFD studies on cylinder flow, channel flow, and airfoil cases, and used SolidWorks FEA for structural and thermal validation on rocket hardware from the propulsion projects above."
    ],
    pills: ["OpenFOAM","COMSOL","SolidWorks FEA","MATLAB","ParaView"]
  }
};
