const PROJECTS = {
  1: {
    num: "01",
    category: "Automation + Controls",
    tagClass: "tag-industry",
    tagLabel: "Automation",
    heroImage: "images/swaging/hero.jpg",
    title: "TUBE SWAGING AUTOMATION",
    org: "Vita Needle Company · Sep 2025 – May 2026",
    teaser: "Built an automation device for Vita Needle's tube swaging line: actuator, gripper, and a full control system with HMI and E-STOP safety.",
    body: [
      "Vita Needle's tube swaging process relied heavily on manual loading and positioning, which introduced inconsistency in alignment and repeatability. They asked our team to build a benchtop system that could handle the loading and positioning steps in a more controlled way.",
      "On the mechanical side, we built the actuation around a stepper-driven linear slide and a pneumatic gripper (solenoid valve plus air compressor), with custom gripper jaws to hold the needle stock during loading. The gripper pads were CNC machined for precise part contact, while supporting fixtures were 3D printed to speed up iteration, all mounted to a machined aluminum base.",
      "I responsible for the HMI, controls and software. On the electronics side, I designed the full control system and HMI around an Arduino Mega: Hall-effect sensing for position referencing and homing, an I2C OLED display, LED status indicators, a buzzer, and start/stop/E-STOP controls. Power and control electronics were split into separate enclosures, a Power Box carrying the 24V supply, stepper driver, and solenoid relay, and a Control Box carrying the low-voltage logic, so higher-power wiring stayed isolated from the signal side. A buck converter steps 24V down to 10V for the control electronics, and the E-STOP is wired normally-on so a fault or disconnect defaults to a safe stop.",
      "The finished prototype replaced the manual feeding process and hit 98% consistent, high-quality swages across a 100-piece test run, passing pin gage testing with high concentricity and straight, repeatable swage lengths."
    ],
    images: [
      { src: "images/swaging/hero.jpg", caption: "Assembled prototype: workbench, gripper, linear slide, swaging machine, power box, and control box" },
      { src: "images/swaging/device-labeled.png", caption: "Component overview" },
      { src: "images/swaging/flowchart.png", caption: "Control logic: state machine from idle through load, feed, return, and cycle complete" },
      { src: "images/swaging/circuit-schematic.png", caption: "Complete circuit schematic: power box and control box" },
      { src: "images/swaging/control-box-cad.png", caption: "Control box CAD drawing: HMI layout (OLED, LEDs, potentiometer, buttons, buzzer, E-STOP)" },
      { src: "images/swaging/full-assembly-cad.png", caption: "Full assembly CAD drawing" },
      { src: "images/swaging/results.png", caption: "Swaging results across a 100-piece test run" },
      { src: "images/swaging/device-angled.png", caption: "Finished prototype" }
    ],
    pills: ["Linear Slide + Stepper Drive", "Pneumatic Gripper", "Arduino Mega", "Hall Effect", "HMI", "E-STOP Safety Circuit", "KiCad", "CNC Machining"],
    link: { text: "Watch demo video", url: "https://drive.google.com/file/d/1wtHHNYq930eD5mf7K11ZIvf9CXFs---d/view?usp=drive_link" }
  },
  2: {
    num: "02",
    category: "Mechanical Design + Electronics",
    tagClass: "tag-burpg",
    tagLabel: "Propulsion",
    heroImage: "images/fuel-pump/device-front.png",
    title: "CENTRIFUGAL FUEL PUMP",
    org: "BU Rocket Propulsion Group (BURPG) · Oct 2025 – Dec 2025",
    teaser: "Sized, modeled, and built a centrifugal fuel pump for BURPG's propulsion system, plus a custom 555-timer/H-bridge motor driver.",
    body: [
      "BURPG needed a way to refuel a liquid bipropellant propulsion system between test loads, so I led a team of two people in designing a compact centrifugal pump assembly to do it. The target spec was a 12V system delivering at least 75 mL/s, roughly 21 ft of head, and enough capacity for 4+ fuel loads per charge.",
      "I sized the pump from first principles rather than guessing at a part: Bernoulli's head-loss equation, continuity, pump power and efficiency relations, and linear momentum conservation to get to a target impeller radius, outlet velocity, and pump diameter. From there I optimized the impeller geometry for the flow target before finalizing the design in SolidWorks.",
      "The housing and impeller were 3D printed to keep prototyping fast, with a custom aluminum shaft turned on the lathe for the motor-impeller interface, and a brushless DC motor for the drive. The exploded assembly shows the full stack: lid, impeller, aluminum shaft, housing, motor holder, and a sealed ball bearing, all sealed with an o-ring and closed off through a custom valve thread.",
      "For testing, I also designed a standalone analog driver: a 555-timer PWM stage (adjustable duty cycle via potentiometer) feeds into a mechanical forward/reverse switch, which routes the signal into a MOSFET H-bridge that drives the motor bidirectionally."
    ],
    images: [
      { src: "images/fuel-pump/device-front.png", caption: "Assembled pump, front view" },
      { src: "images/fuel-pump/device-top-internal.png", caption: "Top-down view showing the impeller and o-ring seal" },
      { src: "images/fuel-pump/device-angled.png", caption: "Assembled pump, angled view" },
      { src: "images/fuel-pump/cad-isometric.png", caption: "CAD isometric view" },
      { src: "images/fuel-pump/cad-cross-section.png", caption: "CAD cross-section" },
      { src: "images/fuel-pump/cad-exploded.png", caption: "Exploded assembly: lid, impeller, aluminum shaft, housing, motor holder, sealed ball bearing" },
      { src: "images/fuel-pump/calc-table.png", caption: "Pump sizing and impeller radius calculations" },
      { src: "images/fuel-pump/schematic.png", caption: "Motor driver schematic: 555-timer PWM stage, direction stage, MOSFET H-bridge" }
    ],
    pills: ["SolidWorks", "BLDC Motor", "Fluid Dynamics", "3D Printing", "Lathe & Mill", "555 Timer PWM", "H-Bridge", "KiCad"]
  },
  3: {
    num: "03",
    category: "Propulsion + Embedded",
    tagClass: "tag-burpg",
    tagLabel: "Propulsion",
    heroImage: "images/nozzle/firing-test.png",
    title: "ROCKET NOZZLE & IGNITION CONTROL SYSTEM",
    org: "BU Rocket Propulsion Group (BURPG) · Sep 2024 – Dec 2024",
    teaser: "Modeled and FEA-tested rocket nozzles for a 12% thrust gain, then built the flight computer that fired them.",
    body: [
      "I led a team of 4 to model several fixed-geometry rocket nozzles in SolidWorks to compare thrust performance, along with a custom flange adapter to mate cleanly with BURPG's propulsion system. Iterative FEA passes on each candidate flagged thermal and structural risk areas around the throat and bolt pattern and guided geometry changes for safety margin, landing on a design with a simulated ~12% thrust efficiency gain over baseline.",
      "Performance was backed by a full set of nozzle sizing calculations: critical pressure ratio, throat and exit geometry, exit velocity, specific impulse, and thrust. The selected design worked out to roughly a 0.72 cm throat diameter and 1.84 cm exit diameter, an exit velocity near 2,690 m/s, an Isp around 274 seconds, and an optimal thrust near 35 N (about 8 lbf). The selected nozzle was 3D printed and test-fit against the real adapter hardware before any live testing.",
      "For the test system, I built a flight computer around a microcontroller running code I wrote in C++, using two NMOS driver stages to actuate an electronic match igniter and a solenoid fuel valve in sequence. In the full working system, an SD card module logged thrust data from a load cell during firings.",
      "That flight computer coordinated valve timing, ignition, and data capture during real nozzle firings on a test rig, which is what let us actually validate the nozzle at target conditions instead of just in simulation."
    ],
    images: [
      { src: "images/nozzle/firing-test.png", caption: "Live nozzle firing test" },
      { src: "images/nozzle/cad-3view.png", caption: "CAD: section, flange, and rear views" },
      { src: "images/nozzle/cad-2view.png", caption: "CAD: assembled front and back views" },
      { src: "images/nozzle/fea-results.png", caption: "FEA results: stress plot and factor-of-safety plot" },
      { src: "images/nozzle/fea-mesh.png", caption: "FEA mesh and bolt load geometry" },
      { src: "images/nozzle/drawing.png", caption: "Dimensioned engineering drawing" },
      { src: "images/nozzle/circuit-schematic.png", caption: "Ignition control circuit: NMOS drivers for igniter and solenoid valve" },
      { src: "images/nozzle/calc-table.png", caption: "Rocket nozzle performance calculations" }
    ],
    pills: ["SolidWorks", "FEA", "Arduino Nano", "C++", "Load Cell DAQ", "Propulsion Theory"]
  },
  4: {
    num: "04",
    category: "Electromechanical Design",
    tagClass: "tag-embedded",
    tagLabel: "Electromech",
    heroImage: "images/drawing-machine/device-1.png",
    title: "TWO-COLOR DRAWING MACHINE",
    org: "Boston University · Personal Project",
    teaser: "A two-axis CNC drawing machine with a custom pen-changer that turns any PNG into a two-color drawing.",
    body: [
      "With the goal of creating an 2.5 DOF mechanical system. I worked in a team of three to create a two-axis CNC drawing machine that could take any JPG or PNG image and draw it in two colors with clean, repeatable pen registration. We built the frame out of aluminum extrusion and designed a 3D-printed pen-changing mechanism to swap between the two pens mid-drawing.",
      "I created a multi-step software workflow, generating drawing vectors from source images, running them through Python scripts I wrote to process and convert them, then feeding the resulting G-code through Repetier-Host for motion control.",
      "Getting consistent pen alignment across color changes took more tuning than the mechanical build did, honestly, but the end result reliably converts a PNG into a clean two-color drawing, shown here on a bird outline and a more detailed dragon ball illustration."
    ],
    images: [
      { src: "images/drawing-machine/device-1.png", caption: "Assembled machine" },
      { src: "images/drawing-machine/device-2.png", caption: "Top-down view with the driver board" },
      { src: "images/drawing-machine/cad-holder.png", caption: "CAD model of the pen-holder / pen-change mechanism" },
      { src: "images/drawing-machine/sample-bird.png", caption: "Sample drawing: bird outline" },
      { src: "images/drawing-machine/sample-dragon.png", caption: "Sample drawing: dragon rider" }
    ],
    pills: ["Python", "G-code", "Stepper Motors", "3D Printing", "CNC"]
  },
  5: {
    num: "05",
    category: "Analog Circuit Design",
    tagClass: "tag-audio",
    tagLabel: "Analog Circuits",
    heroImage: "images/guitar-pedal/breadboard.png",
    title: "GUITAR OVERDRIVE PEDAL",
    org: "Boston University · EC412 Analog Electronics, Spring 2026",
    teaser: "Designed and built a Tube Screamer-inspired overdrive pedal: op-amp gain stage, switchable soft/hard clipping, and active tone control.",
    body: [
      "For my Analog Electronics course final project, I designed and built a guitar overdrive pedal inspired by the Ibanez Tube Screamer TS808. The circuit produces a distinctive tone through frequency-selective distortion, a mid-frequency boost, and smooth clipping that approximates tube saturation. My build follows the same four-stage structure: input buffer, gain and clipping stage, tone and volume stage, and output buffer.",
      "The input stage is a BJT emitter-follower that presents a high input impedance to the guitar pickups without adding gain, preserving high-frequency content. The core of the effect is an op-amp non-inverting gain stage with a potentiometer in the feedback path (the Distortion knob), driving two clipping modes: soft clipping via diodes inside the feedback loop, which gradually reduces gain past about 0.7V for a tube-like saturation curve, and hard clipping via diodes to the supply rails for a sharper, more square-wave distortion. Decoupling capacitors across the hard-clipping diodes turned out to be essential, without them the 4.5V bias rail forward-biased the diodes at rest and the stage didn't work correctly. A high-pass filter in the feedback loop (~720 Hz) also makes the distortion frequency-selective, so bass content stays cleaner than the mids and treble.",
      "After clipping, a passive low-pass filter (~723 Hz) knocks down high-frequency harmonics, and combined with the gain stage's high-pass filter, produces the circuit's signature mid-frequency boost. An active tone stage built around a second op-amp and a 20 kΩ pot then blends between a bass-leaning second-order low-pass response and a treble-leaning active high-pass response depending on knob position, followed by a passive volume pot and a second BJT emitter-follower output buffer for a low, consistent output impedance into the next device in the chain.",
      "The finished pedal behaved as expected across every stage: clean at low gain, progressively distorted as gain increased, with soft clipping rounding the waveform and hard clipping clamping it more aggressively. The tone control gave an audibly warmer, darker character at one extreme and a brighter, more present one at the other, producing a recognizable overdrive effect consistent with the Tube Screamer's tonal signature."
    ],
    images: [
      { src: "images/guitar-pedal/breadboard.png", caption: "Assembled circuit on breadboard" },
      { src: "images/guitar-pedal/schematic.png", caption: "Full schematic: input buffer, gain/clipping, tone/volume, output buffer" },
      { src: "images/guitar-pedal/scope-clean.png", caption: "Clean input sine wave" },
      { src: "images/guitar-pedal/scope-distorted.png", caption: "Distorted output showing the overdrive effect" }
    ],
    pills: ["Op-Amp Gain Stage", "BJT Buffer Stages", "Soft/Hard Diode Clipping", "Active Filtering", "Breadboard Prototyping"],
    link: { text: "Watch demo video", url: "https://drive.google.com/file/d/1MsiZiE1tVk38wpxwCZrdOWXG-kmQn6HL/view?usp=sharing" }
  },
  6: {
    num: "06",
    category: "Instrumentation + Analysis",
    tagClass: "tag-dynamics",
    tagLabel: "Dynamics",
    heroImage: "images/calibration/test-setup.png",
    title: "CALIBRATION OF A MECHANICAL SYSTEM",
    org: "Boston University · Coursework",
    teaser: "Instrumented a spring-mass oscillator rig to extract resonance behavior and estimate dynamic system parameters.",
    body: [
      "For this project I built and instrumented a spring-mass-damper oscillator test rig, a motor-driven bottom collar connected through a spring to a top collar and rod, with an optical displacement sensor and DAQ board reading plate-to-sensor distance. A Scotch yoke mechanism converts the motor's rotation into the linear driving motion.",
      "I wrote a calibration pipeline to turn raw sensor voltage and driving-frequency settings into net displacement data, then swept the driving frequency and measured the response. The results showed the expected resonance behavior: the magnitude ratio climbed approaching resonance, peaked closest to it, then fell off at higher frequencies, and the phase lag tracked the theoretical model as well, near 0° at low frequency, around 90° near resonance, and trending toward 180° at higher frequencies.",
      "From the frequency-response data I estimated the system's dynamic parameters with propagated measurement uncertainty: a spring constant of 87.2 ± 0.33 N/m, a natural frequency of about 15.97 ± 0.75 rad/s, and a damping ratio of 0.077 ± 0.014, all consistent with the theoretical model within uncertainty."
    ],
    images: [
      { src: "images/calibration/test-setup.png", caption: "Experimental test setup: oscilloscope, DAQ, power supply, and oscillator rig" },
      { src: "images/calibration/schematic-collars.png", caption: "System schematic: top and bottom collar configuration" },
      { src: "images/calibration/scotch-yoke.png", caption: "Scotch yoke drive mechanism" },
      { src: "images/calibration/block-diagram.png", caption: "Signal flow: motor to bottom collar, top collar, optical sensor, and DAQ" },
      { src: "images/calibration/magnitude-ratio.png", caption: "Magnitude ratio: experimental vs. theoretical" },
      { src: "images/calibration/displacement-plots.png", caption: "Displacement response at low, near-resonance, and high frequency" },
      { src: "images/calibration/phase-shift.png", caption: "Theoretical phase shift vs. frequency" },
      { src: "images/calibration/params-table.png", caption: "Estimated system parameters with uncertainty" }
    ],
    pills: ["MATLAB", "DAQ", "Vibrations", "Uncertainty Analysis"]
  },
  7: {
    num: "07",
    category: "Computational Fluid Dynamics",
    tagClass: "tag-cfd",
    tagLabel: "CFD",
    heroImage: "images/cfd-airfoil/title-slide.png",
    title: "NACA 0012 AIRFOIL CFD SIMULATION",
    org: "Boston University · ME 547 Computational Fluid Dynamics, Spring 2026",
    teaser: "OpenFOAM simulation of a NACA 0012 airfoil across angles of attack, validated against NASA wind-tunnel data on the BU SCC cluster.",
    body: [
      "I ran an OpenFOAM simulation of a NACA 0012 airfoil at Re = 2.9×10⁶, M = 0.13, across angles of attack from 0° to 12°, validating lift and drag coefficients against experimental data from 1970 NASA wind-tunnel study",
      "I generated the airfoil geometry from a Python script (400 surface points), meshed a 20c × 20c domain with blockMesh, and refined the surface with snappyHexMesh, landing on a 684,497-cell mesh after switching from parallel to serial meshing to avoid decomposition crashes. A three-level grid independence study (35k, 218k, and 335k cells) confirmed convergence, though getting there took some debugging: an early run gave zero lift and drag for every mesh until I traced it to the airfoil surface patch being written to a time directory instead of constant/polyMesh.",
      "I originally planned to run the full angle sweep with simpleFoam (steady-state RANS), which worked at 0° and 4° but diverged above 6°. Switching to pimpleFoam (transient RANS) with the same k-omega SST turbulence model fixed that, and I ran all six angle cases (0°, 4°, 6°, 8°, 10°, 12°) as parallel jobs on the SCC.",
      "The results matched experiment well: lift coefficient tracked the NASA data within about 8% across the full angle range, while drag coefficient matched closely at low angles of attack but was significantly overpredicted past 8°, consistent with known k-omega SST behavior in separated flow. I extracted surface pressure distributions in ParaView and generated all quantitative plots (CL, CD, Cp, grid independence, residual convergence) in MATLAB."
    ],
    images: [
      { src: "images/cfd-airfoil/title-slide.png", caption: "NACA 0012 airfoil CFD simulation overview" },
      { src: "images/cfd-airfoil/mesh-independence.png", caption: "Mesh independence study: coarse, medium, and fine grids" },
      { src: "images/cfd-airfoil/results-lift.png", caption: "Lift coefficient vs. angle of attack, simulation vs. experiment" },
      { src: "images/cfd-airfoil/results-drag.png", caption: "Drag coefficient vs. angle of attack, simulation vs. experiment" },
      { src: "images/cfd-airfoil/results-pressure.png", caption: "Surface pressure coefficient at 0°, 8°, and 12°" }
    ],
    pills: ["OpenFOAM", "pimpleFoam", "k-omega SST", "BU SCC Cluster", "ParaView", "MATLAB"],
    link: { text: "Watch demo video", url: "https://drive.google.com/file/d/11uXeLOaWnMJZMpSWAKmvVXpjl-ULBy7w/view?usp=sharing" }
  },
  8: {
    num: "08",
    category: "Mechanical + Controls",
    tagClass: "tag-mech",
    tagLabel: "Biomedical",
    heroImage: "images/peristaltic-pump/front-view.png",
    title: "PERISTALTIC BLOOD PUMP",
    org: "Boston University · Biomedical Engineering Lab",
    teaser: "Machined structural components and built the analog driver for a peristaltic blood pump prototype.",
    body: [
      "I contributed to a peristaltic pump prototype built for biomedical lab use, aimed at a compact and efficient blood pumping system.",
      "My part of the work was mostly on the fabrication and drive side: machining the roller housing and structural components in aluminum on the lathe and mill for precise motor alignment, and developing an analog motor driver circuit for velocity control so we could tune flow rate during testing."
    ],
    images: [
      { src: "images/peristaltic-pump/front-view.png", caption: "Machined roller housing" },
      { src: "images/peristaltic-pump/side-view.png", caption: "Assembled pump with motor coupled" }
    ],
    pills: ["Lathe & Mill", "Analog Circuits", "Motor Control"]
  },
  9: {
    num: "09",
    category: "CAD Design",
    tagClass: "tag-cad",
    tagLabel: "CAD Design",
    heroImage: "images/cad-highlights/satellite.png",
    title: "CAD & DESIGN HIGHLIGHTS",
    org: "Boston University · Personal Projects & Coursework",
    teaser: "Independent CAD design work across Fusion 360 and SolidWorks, from aerospace concept models to machined-part drawings and mechanism design.",
    body: [
      "A collection of independent CAD design work spanning personal projects and BU coursework, modeled across Fusion 360 and SolidWorks.",
      "On the personal side, I modeled a small satellite concept with deployable solar arrays and antenna booms, and a Mars lander/probe concept with landing legs, solar panels, and an antenna mast, both built from scratch in Fusion 360 as exercises in aerospace packaging and mechanism layout.",
      "The coursework pieces lean more toward manufacturing and mechanism design: a fully dimensioned manufacturing drawing of a machined shaft/fitting for a BU College of Engineering CAM assignment, a motor-driven gear reduction feeding a propeller shaft, and an exploded view of a spherical ball-joint assembly showing the housing, ball, bearings, and fastener layout.",
      "Together they cover most of the CAD skill set I use elsewhere: part modeling, multi-component assemblies, exploded views, and dimensioned manufacturing drawings ready for production."
    ],
    images: [
      { src: "images/cad-highlights/satellite.png", caption: "Small satellite concept model (Fusion 360)" },
      { src: "images/cad-highlights/mars-probe.png", caption: "Mars lander concept model (Fusion 360)" },
      { src: "images/cad-highlights/gear-train.png", caption: "Motor-driven gear reduction and propeller drive" },
      { src: "images/cad-highlights/cam-drawing.png", caption: "Machined fitting manufacturing drawing (BU College of Engineering)" },
      { src: "images/cad-highlights/ball-joint-exploded.png", caption: "Exploded view: spherical ball-joint assembly" }
    ],
    pills: ["Fusion 360", "SolidWorks", "Concept Modeling", "Mechanism Design", "Manufacturing Drawings"]
  }
};
