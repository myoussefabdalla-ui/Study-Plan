const COURSES_CORE1 = [
  {
    "code": "EECG111",
    "name": "Fundamental of Circuits",
    "credits": 3,
    "category": "Core",
    "prereqs": ["PHYG002"],
    "description": "Resistive Network Connections – Kirchhoff's Laws – Sources and Source Transformations – Circuit Analysis Methods – Circuit Theorems – Time-Domain Analysis of AC Circuits – Frequency-Domain Analysis (Phasors) – Application of Circuit Theorems and Analysis Methods to AC Circuits – Introduction to Circuit Simulators.",
    "textbook": "J. W. Nilsson and S. Riedel, Electric Circuits, Pearson, 11th edition, 2019",
    "semester": "FALL"
  },
  {
    "code": "EECG112",
    "name": "Resonant and Coupled Circuits",
    "credits": 4,
    "category": "Core",
    "prereqs": ["EECG111","MTHG102"],
    "description": "Coupled Circuits – Transformers Equivalent Circuits and Phasor Diagrams – Ideal Transformers – Three- Phase Circuits – Series and Parallel Resonance Circuits – RLC Filters – Two-port Networks – Two ports embedded in a Larger Network – Circuit Simulators.",
    "textbook": "J. W. Nilsson and S. Riedel, Electric Circuits, Pearson, 11th edition, 2019",
    "semester": "SPRING"
  },
  {
    "code": "EECG122",
    "name": "Introduction to Electronic Circuits",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG111","PHYG102"],
    "description": "Introduction to electronics devices – PN Junction – BJT – MOS Capacitor – MOST – Diode Circuits – Introduction to MOST and BJT – MOST and BJT biasing circuits and current mirrors – Introduction to amplifier circuits using MOST and BJT – Active Load (clear emphasis on MOST circuits).",
    "textbook": "A. S. Sedra, K. C. Smith, Microelectronic Circuits, Oxford, 7th Edition, 2014",
    "semester": "SPRING"
  },
  {
    "code": "EECG141",
    "name": "Logic Circuits",
    "credits": 3,
    "category": "Core",
    "prereqs": ["AMTG005"],
    "description": "Introduction to Discrete Mathematics and Number Systems – Boolean Algebra and Logic Gates – Simplification of Boolean Functions – Combinational Logic Circuits – Binary Adders – Binary Subtraction – Decoders & Encoders, Multiplexers & Demultiplexers – Types of Flip-Flops – Clocked Flip–Flops – Master-slave and Edge Triggered Flip-flops – General Purpose Registers – Asynchronous and Synchronous Counters – Analysis of Finite State Machine – State Diagrams and Tables – Types of Memories (ROM and RAM) – Hardware Description Language (HDL) Introduction to FPGA.",
    "textbook": "M. Morris Mano, Digital Design with Introduction to Verilog HDL, Pearson India, Fifth Edition, 2012",
    "semester": "FALL"
  },
  {
    "code": "EECG142",
    "name": "Data Structures",
    "credits": 3,
    "category": "Core",
    "prereqs": ["AMTG005"],
    "description": "Pointers and Dynamic Allocation – Sorting and Searching Algorithms – Program Efficiency and Analysis of Algorithms – Data Structures and Abstract Data Types – C++ Classes & Structures – Templates – Linear Lists – Linked Lists – Stacks and Queues – Tables, Hashing, and Fast Retrieval – Binary Trees – Software Design Approaches.",
    "textbook": "M. Berman, Data structure Via C++ Objects by Evolution, Oxford University 2007; Herbert Schildt, C++ from the ground up, McGraw Hill, 4th edition, 2014",
    "semester": "SPRING"
  },
  {
    "code": "EECG171",
    "name": "Measurements and Lab 1",
    "credits": 2,
    "category": "Core",
    "prereqs": [],
    "description": "Measurement Errors – Accuracy – Statistical analysis – Static Calibration – Resolution and Precision – Current and Voltage Measurement Instruments – Measurement of Power – Measurement of Energy and Charge – Measurement of Frequency and Power Factor – Measurement of nonelectrical Parameters – Cathode Ray Oscilloscope (CRO) Applications – Digital Measurement Devices: Digital AVO Meters – Digital Frequency Meters.",
    "textbook": "N/A. Lab Notes.",
    "semester": "FALL"
  },
  {
    "code": "EECG211",
    "name": "Circuits Synthesis and Analysis",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG112"],
    "description": "Network Synthesis – Positive Real Functions – Synthesis Techniques for Single-port Networks – Canonical Forms for two-element Synthesis (LC, RL, RC) – Frequency and Impedance Scaling – Circuits Frequency Domain Analysis – Harmonic Generation – Power Calculations – Circuit Analysis using Laplace Transform – Initial and Final Value Theorems – Circuits Transient and Steady-State Analysis – Circuit Models.",
    "textbook": "J. W. Nilsson and S. Riedel, Electric Circuits, Pearson, 11th edition, 2019",
    "semester": "FALL"
  },
  {
    "code": "EECG221",
    "name": "Basic Electronic Circuits",
    "credits": 4,
    "category": "Core",
    "prereqs": ["EECG122"],
    "description": "Operational Amplifier Basics – Linear Operational Amplifier Applications – High Frequency Response – Differential Pair – Feedback – Oscillators (Ring, Colpitts, Cross–coupled, Crystal).",
    "textbook": "B. Razavi, Fundamentals of Microelectronics 3rd Edition, Wiley, 2021",
    "semester": "FALL"
  },
  {
    "code": "EECG222",
    "name": "Digital Integrated Circuits",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG221"],
    "description": "Introduction to Integrated Circuits Technology – IC Fabrication – MOSFET as Switches – Ratioed Logic Families – CMOS Gates – Delay in CMOS – Design using Logical Effort – Dynamic CMOS – CMOS Latches and Registers – Synchronous Pipelines.",
    "textbook": "J. M. Rabae, Digital Integrated Circuits 2nd Ed., Prentice Hall, 2003; K. Abbas, Handbook of Digital CMOS Technology, Circuits, and Systems, Springer, 2020",
    "semester": "SPRING"
  },
  {
    "code": "EECG231",
    "name": "Analysis of Continuous and Discrete-Time Signals",
    "credits": 4,
    "category": "Core",
    "prereqs": ["MTHG102"],
    "description": "Introduction to Signal Analysis – Basic System Properties – Linear time-invariant Systems – Fourier Series analysis – Fourier Transform and Signal Spectrum – Sampling Theorem – Introduction to Communication Systems – Introduction to discrete-time Systems – Fourier Series Analysis – Discrete-time Fourier transform – DFT – Z-transform.",
    "textbook": "A. V. Oppenheim and Alan S. Willsky, Signals and Systems (2nd Ed.), Prentice Hall, 1997",
    "semester": "FALL"
  },
  {
    "code": "EECG232",
    "name": "Introduction to Communication Systems",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG231"],
    "description": "Amplitude Modulation – Frequency and Phase Modulation – Frequency Division Multiplexing – Introduction to Digital Modulation Techniques – Pulse Amplitude Modulation (PAM), Pulse Coded Modulation (PCM), Time Division Multiplexing (TDM) – Delta Modulation (DM) – Differential PCM – Performance of Analog Modulation Techniques – Random Processes – Baseband Pulse Transmission – Matched Filters – Inter-symbol Interference.",
    "textbook": "B. Lathi, Modern Digital and Analog Communication, Oxford, 5th Edition, 2018",
    "semester": "SPRING"
  },
  {
    "code": "EECG241",
    "name": "Processor Architecture",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG141"],
    "description": "Instruction Sets – Basic ALU Design – Control Units – Memory Types RAM/ROM – Memory Cells – Memory Timing – Interrupt Handling – Peripheral Processors – Direct Memory Access – Serial/Parallel Interfacing – Synchronous/Asynchronous Transmission – Bus Architectures – Bus Arbitration – Sensors and Actuators.",
    "textbook": "M. M. Mano and C. R. Kime, Logic and Computer Design Fundamentals, 5th Edition, Pearson, 2016",
    "semester": "FALL"
  },
  {
    "code": "EECG242",
    "name": "Embedded Systems",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG142"],
    "description": "Importance and Applications of Embedded Systems – Toolchains, Memory Regions and Linking – Bootloader Operation – Program Architecture: Bare-metal vs RTOS, Super-loop vs Event-based – I/O Processing and Interrupt Handling – Multi-Tasking: Threads, Communication, Locking, Mutual Exclusion, Timers, and Queues – File Systems – Memory Management – Testing of Embedded Systems.",
    "textbook": "X. Fan, Real-Time Embedded Systems Design Principles and Engineering Practices, Elsevier 2015",
    "semester": "SPRING"
  },
  {
    "code": "EECG252",
    "name": "Fields and Wave Propagation",
    "credits": 4,
    "category": "Core",
    "prereqs": ["MTHG202","PHYG101"],
    "description": "Static Electric Fields – Static Magnetic Fields – Steady Currents – Time-varying Fields – EM Wave Propagation in Unbounded Media – Reflection and Transmission of EM Waves.",
    "textbook": "D. Cheng, Field and Wave Electromagnetics, Addison-Wesley, 1983",
    "semester": "SPRING"
  },
  {
    "code": "EECG271",
    "name": "Measurements and Lab 2",
    "credits": 2,
    "category": "Core",
    "prereqs": ["EECG112"],
    "description": "Troubleshooting Techniques for Electronic Devices and Circuits – Develop Test Plans and Verify the Design using Simulators and Emulators.",
    "textbook": "N/A. Lab Notes.",
    "semester": "FALL"
  }
];

