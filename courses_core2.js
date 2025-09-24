const COURSES_CORE2 = [
  {
    "code": "EECG321",
    "name": "Analog Integrated Circuits",
    "credits": 4,
    "category": "Core",
    "prereqs": ["EECG221"],
    "description": "Noise – Operational Amplifier Design – Active Circuits Design – Power Amplifiers – DAC – ADC – Linear/Switched Regulators – PLL.",
    "textbook": "B. Razavi, Design Of Analog CMOS Integrated Circuit, 2nd Edition, 2017",
    "semester": "FALL"
  },
  {
    "code": "EECG331",
    "name": "Advanced Communication Systems",
    "credits": 4,
    "category": "Core",
    "prereqs": ["EECG232"],
    "description": "Signal Space Analysis – Passband Data Transmission (Digital Modulation Techniques) – Performance of Modulation Techniques – Fading Channels and Spread Spectrum Multicarrier Modulation – DSL – OFDM Basics – Information Theory – Channel Capacity – Source and Channel Coding.",
    "textbook": "S. Haykin and M. Moher, Communication Systems, (5th Ed.) Wiley, 2009; T. Rappaport, Wireless Communications Principles and Practices, (2nd Ed.) Prentice Hall 2002",
    "semester": "FALL"
  },
  {
    "code": "EECG341",
    "name": "Advanced Processor Architecture",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG241"],
    "description": "Pipelining – Branch Prediction – Multi–Core Architecture – Very–Long Instruction Word Architecture – Digital Signal Processor – Graphical Processing Unit – Types of Memories – Caches and Virtual Memory – Multi-level Caches – External Storage Devices – Performance Evaluation and Reliability Metrics.",
    "textbook": "J. Hennessy and D. Patterson, Computer Architecture: A Quantitative Approach, Morgan Kaufmann, 5th edition, 2012",
    "semester": "FALL"
  },
  {
    "code": "EECG342",
    "name": "Communication Networks",
    "credits": 3,
    "category": "Core",
    "prereqs": ["MTHG103"],
    "description": "Overview of Computer Networks – Circuit Switching – Packet Switching – The Way Networks Work and Example Protocols – Telephony Networks – The Internet Architecture and Protocols – Routing – Transport Layer Protocols: TCP and UDP – Sliding Window Protocols – Media Access Control Protocols – Local Area Networks Architecture, Protocols and Performance.",
    "textbook": "J. F. Kurose and K. W. Ross, Computer Networking: A Top-Down Approach Featuring the Internet, 8th Edition, Pearson, 2021",
    "semester": "SPRING"
  },
  {
    "code": "EECG351",
    "name": "Transmission Lines and Matching Techniques",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG252"],
    "description": "Theory of Transmission Lines – Transmission Line Circuits – The Smith Chart – Matching Techniques – The Scattering Parameters – Microwave Passive Components – Micro Strips and Strips lines.",
    "textbook": "D. Pozar, Microwave Engineering, Wiley, 4th Edition, 2011",
    "semester": "FALL"
  },
  {
    "code": "EECG352",
    "name": "Waveguides and Antennas",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG351"],
    "description": "Propagation in Conducting Cylindrical Waveguides – Rectangular Waveguides – Propagation in Grounded Slabs – Cavity Resonators – Excitation of Guided Modes – Antennas as a Component in Wireless Systems – Basic Antenna Parameters – Antenna Types and Modeling Techniques – Antennas in Receive Mode – Antenna Arrays.",
    "textbook": "D. Pozar, Microwave Engineering, Wiley, 4th Edition, 2011; C. Balanis, Antenna Theory: Analysis and Design, Wiley, 4th edition, 2016",
    "semester": "SPRING"
  },
  {
    "code": "EECG361",
    "name": "Linear Systems",
    "credits": 3,
    "category": "Core",
    "prereqs": ["MTHG102"],
    "description": "Linear Continuous Systems – Modeling of Dynamic Systems – Transfer Functions – Steady-State Behavior – Transient Response of first, integrating, second-order and higher-order systems – Block Diagram Reduction Techniques – Stability – Routh Stability Criterion – Analysis of Systems in State-Space.",
    "textbook": "F. Golnaraghi and B. C. Kuo, Automatic Control Systems, 10th Edition, McGraw-Hill Education, 2017",
    "semester": "FALL"
  },
  {
    "code": "EECG362",
    "name": "Control System Design",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG361"],
    "description": "Design of Control Systems – Control Systems Analysis and Design using PID Controller – Ziegler Nichols Tuning Method – Root Locus Analysis and Design – Compensation using Root Locus – Frequency Response Methods – Bode Plot Analysis and Design – Lead-lag Compensator Design – Sensitivity Analysis – Control system design using MatLab – Introduction to Fractional-order PID controller using MatLab.",
    "textbook": "F. Golnaraghi and B. C. Kuo, Automatic Control Systems, 10th Edition, McGraw-Hill Education, 2017; K. Ogata, Modern Control Engineering, 5th Edition, Pearson, 2010",
    "semester": "SPRING"
  },
  {
    "code": "EECG371",
    "name": "Industrial Training",
    "credits": 1,
    "category": "Core",
    "prereqs": [],
    "description": "Oriented towards training on industrial establishments relevant to the program and its specializations. The program internship advisor schedules an oral exam to formally grade the performance of the student. Additional to the formal report of the trainer in the industrial establishment on the student's performance during training, the student submits a report and a presentation to be evaluated during the oral exam. The course is graded on a Pass/Fail grading system.",
    "textbook": "",
    "semester": "BOTH"
  },
  {
    "code": "EECG461",
    "name": "Modern Control Engineering",
    "credits": 3,
    "category": "Core",
    "prereqs": ["EECG362"],
    "description": "State-space representation – Solution of state space equations – Transformations of state-space models – Stability – Controllability – Observability – State feedback – State observability – Use of z-transform for digital control – Discrete-time transfer function – Controller design in z-domain.",
    "textbook": "Lecture notes and recent research papers",
    "semester": "FALL"
  },
  {
    "code": "EECG471",
    "name": "Graduation Project 1",
    "credits": 1,
    "category": "Core",
    "prereqs": [],
    "description": "The course is an in-depth group project that requires students to practically apply knowledge from their previous coursework. Students, working in teams, design, build, and present a challenging engineering project. The projects are proposed and supported by the faculty members and/or industry experts who supervise and coach the teams during the course. Students are required to choose and research a potential project to be designed and implemented in the second part of the course. The students are expected to give an oral presentation to be approved.",
    "textbook": "",
    "semester": "BOTH"
  },
  {
    "code": "EECG472",
    "name": "Graduation Project 2",
    "credits": 3,
    "category": "Core",
    "prereqs": [],
    "description": "The course is an in-depth group project that requires students to practically apply knowledge from their previous coursework. Students, working in teams, design, build, and present a challenging engineering project. The projects are proposed and supported by the faculty members and/or industry experts who supervise and coach the teams during the course. A dissertation on the project is submitted on which each student is examined orally by a panel of experts.",
    "textbook": "NA",
    "semester": "BOTH"
  }
];
