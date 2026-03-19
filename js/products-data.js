/* ============================================================
   MapleSensors — CRYSOUND Product Data
   Source: CRY3000 Series Sensors Product Catalogue 2025
   ============================================================ */

const PRODUCTS = [

  /* ══════════════════════════════════════════════
     1-INCH MEASUREMENT MICROPHONES
  ══════════════════════════════════════════════ */
  {
    id: "CRY3101",
    name: "CRY3101",
    category: "1inch",
    categoryLabel: "1″ Measurement Microphone",
    badge: "1″ · Free-Field · Prepolarized",
    image: "images/products/CRY3101.jpg",
    description: "1-inch free-field prepolarized measurement microphone with low noise and wide frequency response. Available in pressure-field and free-field prepolarized types, widely suited for applications requiring precise acoustic testing.",
    applications: ["Anechoic chamber testing", "Electroacoustic testing", "Environmental noise measurement", "Acoustic research"],
    highlights: ["Low noise floor", "Wide frequency response", "Prepolarized (0V external bias required)", "Large diaphragm for high sensitivity"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "4 Hz – 16 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "12 dB – 146 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "23.77 mm",
      "Height with Grid": "19 mm"
    }
  },
  {
    id: "CRY3102",
    name: "CRY3102",
    category: "1inch",
    categoryLabel: "1″ Measurement Microphone",
    badge: "1″ · Pressure-Field · Prepolarized",
    image: "images/products/CRY3102.jpg",
    description: "1-inch pressure-field prepolarized microphone for measuring real sound pressure on surfaces and inside enclosed cavities. Used in coupler measurements, electroacoustics testing, telecom, and component testing.",
    applications: ["Ear simulator / coupler measurements", "Enclosed cavity sound pressure testing", "Telecom component testing", "Electroacoustic testing"],
    highlights: ["Pressure-field optimized", "Low noise, wide frequency response", "Prepolarized (0V bias)", "Compatible with standard couplers"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "4 Hz – 8 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "12 dB – 146 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "23.77 mm",
      "Height with Grid": "19 mm"
    }
  },
  {
    id: "CRY3103",
    name: "CRY3103",
    category: "1inch",
    categoryLabel: "1″ Measurement Microphone",
    badge: "1″ · Free-Field · High Sensitivity",
    image: "images/products/CRY3103.jpg",
    description: "1-inch free-field microphone with high sensitivity of 100 mV/Pa. Ideal for low-noise acoustic testing environments requiring maximum sensitivity. Suitable for precise acoustic measurements.",
    applications: ["Low-noise acoustic testing", "High-sensitivity measurements", "Acoustic research", "Anechoic chamber measurements"],
    highlights: ["100 mV/Pa sensitivity — highest in 1″ range", "Free-field optimized", "Wide frequency response", "Prepolarized for easy integration"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "100 mV/Pa, –20 dBV/Pa",
      "Frequency Response": "4 Hz – 12 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "10 dB – 130 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "23.77 mm",
      "Height with Grid": "19 mm"
    }
  },

  /* ══════════════════════════════════════════════
     1/2-INCH MEASUREMENT MICROPHONES
  ══════════════════════════════════════════════ */
  {
    id: "CRY3201",
    name: "CRY3201",
    category: "half",
    categoryLabel: "½″ Measurement Microphone",
    badge: "½″ · Free-Field · Prepolarized",
    image: "images/products/CRY3201.jpg",
    description: "High-sensitivity 1/2-inch free-field microphone with ultra-wide 40 kHz bandwidth. Excellent for precision acoustic testing across a broad frequency range.",
    applications: ["Wide-bandwidth acoustic testing", "Electroacoustic measurements", "Speaker and transducer testing", "Noise testing"],
    highlights: ["Wide 40 kHz bandwidth", "High 23 dB–160 dB dynamic range", "Prepolarized (0V)", "Suitable for diverse acoustic testing scenarios"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 40 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "23 dB – 160 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "12.7 mm"
    }
  },
  {
    id: "CRY3202",
    name: "CRY3202",
    category: "half",
    categoryLabel: "½″ Measurement Microphone",
    badge: "½″ · Pressure-Field · Prepolarized",
    image: "images/products/CRY3202.jpg",
    description: "1/2-inch pressure-field microphone for coupler measurements, electroacoustics testing, telecom, and component testing in various industries including automotive and aerospace.",
    applications: ["Coupler measurements", "Telecom component testing", "Automotive acoustic testing", "Aerospace industry"],
    highlights: ["Pressure-field optimized", "High dynamic range 23–160 dB", "Prepolarized (0V)", "Widely compatible with measurement systems"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "23 dB – 160 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "12.7 mm"
    }
  },
  {
    id: "CRY3203",
    name: "CRY3203",
    category: "half",
    categoryLabel: "½″ Measurement Microphone — Star Product",
    badge: "½″ · Free-Field · Star Product",
    image: "images/products/CRY3203.jpg",
    description: "The CRY3203 is a 1/2-inch prepolarized free-field measurement microphone. Its frequency range of 3.15 Hz to 20 kHz matches the auditory frequency range of the human ear, making it an ideal choice for acoustic testing and environmental noise measurement.",
    applications: ["Anechoic chamber testing", "Electroacoustic testing", "Noise testing", "Car noise testing", "Environmental noise measurement"],
    highlights: ["Frequency response close to human hearing", "Dynamic range close to human hearing", "Outstanding performance", "Titanium diaphragm construction", "Cleanroom assembled"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "16 dB – 146 dB",
      "Operating Temperature": "–30°C to +80°C",
      "IEC 61094-4 Type": "WS2F",
      "Equalization Method": "Rear Equalization",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "16.2 mm"
    }
  },
  {
    id: "CRY3204",
    name: "CRY3204",
    category: "half",
    categoryLabel: "½″ Measurement Microphone",
    badge: "½″ · Pressure-Field · Prepolarized",
    image: "images/products/CRY3204.jpg",
    description: "1/2-inch pressure-field prepolarized microphone optimized for high SPL measurements up to 146 dB. Suitable for enclosed cavity sound pressure testing and coupler applications.",
    applications: ["Enclosed cavity testing", "High-SPL pressure measurements", "Coupler and ear simulator use", "Electroacoustic testing"],
    highlights: ["High sensitivity 50 mV/Pa", "Pressure-field for real surface SPL", "Prepolarized (0V)", "Robust for demanding environments"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 10 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "16 dB – 146 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "16.2 mm"
    }
  },
  {
    id: "CRY3281",
    name: "CRY3281",
    category: "half",
    categoryLabel: "½″ Measurement Microphone — Externally Polarized",
    badge: "½″ · Free-Field · 200V External",
    image: "images/products/CRY3281.jpg",
    description: "1/2-inch externally polarized free-field microphone (200V). Higher temperature tolerance and exceptional stability for demanding lab and industrial environments.",
    applications: ["High-temperature acoustic testing", "Precision laboratory measurements", "Industrial acoustic monitoring", "Wide-bandwidth testing"],
    highlights: ["Externally polarized for higher temperature tolerance", "Wide 40 kHz bandwidth", "High dynamic range 23–160 dB", "200V polarization for superior stability"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 40 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "23 dB – 160 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "12.7 mm"
    }
  },
  {
    id: "CRY3282",
    name: "CRY3282",
    category: "half",
    categoryLabel: "½″ Measurement Microphone — Externally Polarized",
    badge: "½″ · Pressure-Field · 200V External",
    image: "images/products/CRY3282.jpg",
    description: "1/2-inch externally polarized pressure-field microphone (200V). Designed for high-precision coupler and enclosed cavity measurements requiring higher temperature performance.",
    applications: ["High-temperature pressure measurements", "Coupler applications", "Precision lab testing", "Enclosed cavity measurements"],
    highlights: ["Externally polarized 200V for temperature tolerance", "Pressure-field optimized", "High dynamic range", "Stable operation in demanding environments"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "23 dB – 160 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "12.7 mm"
    }
  },
  {
    id: "CRY3284",
    name: "CRY3284",
    category: "half",
    categoryLabel: "½″ Measurement Microphone — Externally Polarized",
    badge: "½″ · Pressure-Field · 200V · High Sensitivity",
    image: "images/products/CRY3284.jpg",
    description: "1/2-inch externally polarized pressure-field microphone (200V) with 50 mV/Pa sensitivity. High sensitivity variant for low-noise pressure measurements in high-temperature environments.",
    applications: ["Low-noise pressure measurements", "High-temperature testing", "Precision laboratory use", "Telecom testing"],
    highlights: ["High sensitivity 50 mV/Pa", "Externally polarized 200V", "Pressure-field optimized", "Suitable for extreme temperature environments"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 10 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "16 dB – 146 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "16.2 mm"
    }
  },
  {
    id: "CRY3285",
    name: "CRY3285",
    category: "half",
    categoryLabel: "½″ Measurement Microphone — Externally Polarized",
    badge: "½″ · Free-Field · 200V · High Sensitivity",
    image: "images/products/CRY3285.jpg",
    description: "1/2-inch externally polarized free-field microphone (200V) with 50 mV/Pa sensitivity. High sensitivity variant for free-field measurements in high-temperature environments.",
    applications: ["Free-field measurements", "High-temperature acoustic testing", "Environmental noise measurement", "Wide-frequency testing"],
    highlights: ["High sensitivity 50 mV/Pa", "Externally polarized 200V", "Free-field optimized", "Enhanced temperature tolerance"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "16 dB – 146 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "13.2 mm",
      "Height with Grid": "16.2 mm"
    }
  },

  /* ══════════════════════════════════════════════
     1/4-INCH MEASUREMENT MICROPHONES
  ══════════════════════════════════════════════ */
  {
    id: "CRY3401",
    name: "CRY3401",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone",
    badge: "¼″ · Free-Field · Prepolarized",
    image: "images/products/CRY3401.jpg",
    description: "1/4-inch free-field prepolarized microphone with high sensitivity for precision acoustic testing. Wide 40 kHz bandwidth with high SPL tolerance up to 144 dB.",
    applications: ["Wide-frequency acoustic testing", "Speaker and transducer measurement", "High-precision lab measurements", "Noise testing"],
    highlights: ["Wide 40 kHz bandwidth", "High 26–144 dB dynamic range", "Small form factor", "Prepolarized (0V)"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "15.8 mV/Pa, –36 dBV/Pa",
      "Frequency Response": "4 Hz – 40 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "26 dB – 144 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3402",
    name: "CRY3402",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone",
    badge: "¼″ · Pressure-Field · 70 kHz",
    image: "images/products/CRY3402.jpg",
    description: "1/4-inch pressure-field microphone with 70 kHz bandwidth. Exceptional high-SPL tolerance up to 170 dB — suited for automotive, aerospace, and high-intensity component testing.",
    applications: ["Wide-frequency testing", "High-definition speaker testing", "High sound pressure testing", "Automotive and aerospace acoustic testing"],
    highlights: ["Ultra-wideband to 70 kHz", "Extreme SPL tolerance to 170 dB", "Pressure-field for surface measurements", "Small compact form factor"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "1.6 mV/Pa, –56 dBV/Pa",
      "Frequency Response": "4 Hz – 70 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "45 dB – 170 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3403",
    name: "CRY3403",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone — Star Product",
    badge: "¼″ · Free-Field · Ultra-Wideband · Star Product",
    image: "images/products/CRY3403.jpg",
    description: "The CRY3403 is a 1/4-inch prepolarized free-field ultra-wideband and high-sound-pressure measurement microphone. It exhibits extraordinary wide frequency response and extremely flat frequency response characteristics. Its effective measurement frequency range can be as high as 90 kHz, and it can stably withstand sound pressure levels as high as 165 dB (re. 20 µPa).",
    applications: ["Wide-frequency testing", "High-definition speaker testing", "High sound pressure testing", "Ultrasonic measurements"],
    highlights: ["Ultra-wideband acoustic testing to 90 kHz", "High sound pressure acoustic testing to 165 dB", "Outstanding performance", "Extremely flat frequency response"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "4 mV/Pa, –48 dBV/Pa",
      "Frequency Response": "4 Hz – 90 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "35 dB – 165 dB",
      "Operating Temperature": "–30°C to +80°C",
      "IEC 61094-4 Type": "WS3F",
      "Equalization Method": "Rear Equalization",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3404",
    name: "CRY3404",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone — Star Product",
    badge: "¼″ · Pressure-Field · 175 dB · Star Product",
    image: "images/products/CRY3404.jpg",
    description: "The CRY3404 is a 1/4-inch prepolarized pressure-field high-sound-pressure measurement microphone. It has been widely used and recognized in some high-sound-pressure testing environments. Ideal for gunshot, explosion, aviation, and aerospace acoustic testing.",
    applications: ["Sound of gunshots", "Explosion sound measurement", "Aviation engine noise", "Aerospace acoustic testing", "High-intensity industrial testing"],
    highlights: ["Frequency response close to human hearing", "Upper limit of the ultra-high dynamic range test", "175 dB SPL tolerance", "IEC 61094-4 WS3P compliant"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "0.56 mV/Pa, –65 dBV/Pa",
      "Frequency Response": "10 Hz – 20 kHz",
      "Polarization Voltage": "0 V (Pre-polarized)",
      "Dynamic Range (re.20µPa)": "59 dB – 175 dB",
      "Operating Temperature": "–30°C to +70°C",
      "Temperature Coefficient": "–0.002 dB/°C",
      "Static Pressure Coefficient": "–0.01 dB/kPa",
      "IEC 61094-4 Type": "WS3P",
      "Equalization Method": "Rear Equalization",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3406",
    name: "CRY3406",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone — Externally Polarized",
    badge: "¼″ · Pressure-Field · 200V External",
    image: "images/products/CRY3406.jpg",
    description: "1/4-inch externally polarized pressure-field microphone (200V). Higher temperature tolerance for precision lab measurements. Wide 26–144 dB dynamic range.",
    applications: ["High-temperature pressure measurements", "Precision laboratory testing", "Enclosed cavity measurements", "Industrial acoustic monitoring"],
    highlights: ["Externally polarized 200V", "Higher temperature tolerance", "Pressure-field optimized", "Wide dynamic range"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "15.8 mV/Pa, –36 dBV/Pa",
      "Frequency Response": "4 Hz – 20 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "26 dB – 144 dB",
      "Operating Temperature": "–20°C to +60°C",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3482",
    name: "CRY3482",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone — Externally Polarized",
    badge: "¼″ · Pressure-Field · 200V · 70 kHz",
    image: "images/products/CRY3482.jpg",
    description: "1/4-inch externally polarized pressure-field microphone (200V) with ultra-wide 70 kHz bandwidth and extreme 170 dB SPL tolerance. For high-temperature environments requiring wideband pressure measurements.",
    applications: ["Wideband high-temperature testing", "High-intensity pressure measurements", "Aerospace acoustic testing", "Automotive NVH testing"],
    highlights: ["Ultra-wideband to 70 kHz", "Extreme 170 dB SPL tolerance", "200V external polarization", "High-temperature stable"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "1.6 mV/Pa, –56 dBV/Pa",
      "Frequency Response": "4 Hz – 70 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "45 dB – 170 dBA",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },
  {
    id: "CRY3485",
    name: "CRY3485",
    category: "quarter",
    categoryLabel: "¼″ Measurement Microphone — Externally Polarized",
    badge: "¼″ · Free-Field · 200V · 90 kHz",
    image: "images/products/CRY3485.jpg",
    description: "1/4-inch externally polarized free-field microphone (200V) with ultra-wide 90 kHz bandwidth. For high-temperature environments requiring ultra-wideband free-field measurements up to 165 dB.",
    applications: ["Ultra-wideband free-field measurements", "High-temperature acoustic testing", "Ultrasonic measurements", "High-intensity acoustic research"],
    highlights: ["Ultra-wideband to 90 kHz", "165 dB SPL tolerance", "200V external polarization", "Free-field optimized"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "4 mV/Pa, –48 dBV/Pa",
      "Frequency Response": "4 Hz – 90 kHz",
      "Polarization Voltage": "200 V (External)",
      "Dynamic Range (re.20µPa)": "35 dB – 165 dB",
      "Operating Temperature": "–30°C to +80°C",
      "Diameter with Grid": "7.0 mm",
      "Height with Grid": "10.5 mm"
    }
  },

  /* ══════════════════════════════════════════════
     PREAMPLIFIERS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3501",
    name: "CRY3501",
    category: "preamp",
    categoryLabel: "½″ Preamplifier",
    badge: "½″ Preamplifier · IEPE · BNC · TEDS",
    image: "images/products/CRY3501.jpg",
    description: "1/2-inch IEPE preamplifier with BNC interface. Ultra-wide 200 kHz bandwidth. Compatible with all prepolarized condenser microphones. TEDS support per IEEE 1451.4 V1.0 for reduced setup time.",
    applications: ["General-purpose acoustic measurement", "Wideband signal conditioning", "Laboratory acoustic testing", "Integration with standard measurement systems"],
    highlights: ["Ultra-wide 1 Hz–200 kHz bandwidth", "BNC interface for universal compatibility", "TEDS IEEE 1451.4 V1.0 support", "Low noise floor"],
    specs: {
      "Frequency Response": "1 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "BNC",
      "Thread Interface Diameter": "11.7 mm–60 UNS",
      "Height": "80.5 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3502",
    name: "CRY3502",
    category: "preamp",
    categoryLabel: "½″ Preamplifier",
    badge: "½″ Preamplifier · IEPE · SMB · TEDS",
    image: "images/products/CRY3502.jpg",
    description: "1/2-inch IEPE preamplifier with SMB interface. Ultra-wide 200 kHz bandwidth. Compatible with all prepolarized condenser microphones. TEDS support per IEEE 1451.4 V1.0.",
    applications: ["Acoustic measurement with SMB connectivity", "Wideband signal conditioning", "Laboratory testing", "Integration with SMB-compatible analyzers"],
    highlights: ["Ultra-wide 1 Hz–200 kHz bandwidth", "SMB interface", "TEDS IEEE 1451.4 V1.0 support", "Low noise floor"],
    specs: {
      "Frequency Response": "1 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "SMB",
      "Thread Interface Diameter": "11.7 mm–60 UNS",
      "Height": "29.2 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3503",
    name: "CRY3503",
    category: "preamp",
    categoryLabel: "½″ Preamplifier",
    badge: "½″ Preamplifier · IEPE · 10-32UNF · TEDS",
    image: "images/products/CRY3503.jpg",
    description: "1/2-inch IEPE preamplifier with 10-32UNF interface. Ultra-wide 200 kHz bandwidth. Compatible with all prepolarized condenser microphones. TEDS support per IEEE 1451.4 V1.0.",
    applications: ["Acoustic measurement with 10-32UNF connectivity", "Wideband signal conditioning", "Laboratory testing", "Integration with 10-32UNF systems"],
    highlights: ["Ultra-wide 1 Hz–200 kHz bandwidth", "10-32UNF interface", "TEDS IEEE 1451.4 V1.0 support", "Low noise floor"],
    specs: {
      "Frequency Response": "1 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "10-32UNF",
      "Thread Interface Diameter": "11.7 mm–60 UNS",
      "Height": "29.2 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3521",
    name: "CRY3521",
    category: "preamp",
    categoryLabel: "Preamplifier — Flat Disc",
    badge: "Preamplifier · BNC · 10 Hz–100 kHz",
    image: "images/products/CRY3521.jpg",
    description: "Specialized flat-disc preamplifier with BNC interface. Frequency coverage from 10 Hz to 100 kHz. Compatible with all prepolarized condenser microphones.",
    applications: ["Specialized acoustic signal conditioning", "Integration with 1/2-inch microphones", "Flat-disc format mounting applications"],
    highlights: ["Flat-disc form factor", "BNC interface", "10 Hz–100 kHz coverage", "IEPE powered"],
    specs: {
      "Frequency Response": "10 Hz – 100 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">7.0 Vp",
      "Interface Type": "BNC",
      "Thread Interface Diameter": "11.7 mm–60 UNS"
    }
  },
  {
    id: "CRY3541",
    name: "CRY3541",
    category: "preamp",
    categoryLabel: "¼″ Preamplifier",
    badge: "¼″ Preamplifier · IEPE · SMB · TEDS",
    image: "images/products/CRY3541.jpg",
    description: "1/4-inch IEPE preamplifier with SMB interface. Ultra-wide 200 kHz bandwidth for wideband acoustic measurements. TEDS support included per IEEE 1451.4 V1.0.",
    applications: ["Wideband ¼-inch microphone conditioning", "High-frequency acoustic measurement", "Acoustic analyzer integration"],
    highlights: ["Ultra-wide 1 Hz–200 kHz bandwidth", "SMB interface", "TEDS IEEE 1451.4 V1.0", "Compact ¼-inch body"],
    specs: {
      "Frequency Response": "1 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "SMB",
      "Thread Interface Diameter": "5.7 mm–60 UNS",
      "Height": "47.8 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3542",
    name: "CRY3542",
    category: "preamp",
    categoryLabel: "¼″ Preamplifier",
    badge: "¼″ Preamplifier · IEPE · SMB · 3 Hz · TEDS",
    image: "images/products/CRY3542.jpg",
    description: "1/4-inch IEPE preamplifier with SMB interface. Frequency range starting at 3 Hz for low-frequency acoustic measurements. TEDS support included.",
    applications: ["Low-frequency wideband ¼-inch measurement", "Infrasound capable acoustic testing", "High-frequency acoustic measurement"],
    highlights: ["3 Hz–200 kHz bandwidth", "SMB interface", "TEDS IEEE 1451.4 V1.0", "Compact ¼-inch body"],
    specs: {
      "Frequency Response": "3 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "SMB",
      "Thread Interface Diameter": "5.7 mm–60 UNS",
      "Height": "33.8 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3543",
    name: "CRY3543",
    category: "preamp",
    categoryLabel: "¼″ Preamplifier",
    badge: "¼″ Preamplifier · IEPE · 10-32UNF · TEDS",
    image: "images/products/CRY3543.jpg",
    description: "1/4-inch IEPE preamplifier with 10-32UNF interface. Ultra-wide 200 kHz bandwidth. TEDS support per IEEE 1451.4 V1.0.",
    applications: ["¼-inch microphone conditioning with 10-32UNF", "Wideband acoustic measurement", "High-frequency testing"],
    highlights: ["Ultra-wide 1 Hz–200 kHz bandwidth", "10-32UNF interface", "TEDS IEEE 1451.4 V1.0", "Compact ¼-inch body"],
    specs: {
      "Frequency Response": "1 Hz – 200 kHz",
      "Power Supply": "IEPE (2 mA – 20 mA)",
      "Typical Operating Current": "4 mA",
      "Maximum Output Voltage": ">10.0 Vp",
      "Interface Type": "10-32UNF",
      "Thread Interface Diameter": "5.7 mm–60 UNS",
      "Height": "47.8 mm",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },

  /* ══════════════════════════════════════════════
     1-INCH MICROPHONE SETS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3101-S01",
    name: "CRY3101-S01",
    category: "set",
    categoryLabel: "1″ Measurement Microphone Set",
    badge: "1″ Set · Free-Field · BNC · IEPE",
    image: "images/products/CRY3101-S01.jpg",
    description: "CRYSOUND 1-inch free-field Measurement Microphone Kit including IEPE preamplifier. Specifically designed for sensitive acoustic testing in low-noise environments, making it widely suitable for applications requiring precise acoustic measurements.",
    applications: ["Precise acoustic testing", "Low-noise environment measurement", "Anechoic chamber testing", "Electroacoustic research"],
    highlights: ["Complete kit — mic + IEPE preamplifier", "BNC interface ready to use", "TEDS support for fast setup", "Free-field optimized"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "4 Hz – 16 kHz",
      "Dynamic Range (re.20µPa)": "12 dB – 138 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3102-S01",
    name: "CRY3102-S01",
    category: "set",
    categoryLabel: "1″ Measurement Microphone Set",
    badge: "1″ Set · Pressure-Field · BNC · IEPE",
    image: "images/products/CRY3102-S01.jpg",
    description: "CRYSOUND 1-inch pressure-field Measurement Microphone Kit including IEPE preamplifier. BNC interface, TEDS support. Ideal for coupler and enclosed cavity pressure measurements.",
    applications: ["Coupler measurements", "Enclosed cavity pressure testing", "Telecom component testing", "Electroacoustic testing"],
    highlights: ["Complete kit — mic + IEPE preamplifier", "Pressure-field optimized", "BNC interface ready to use", "TEDS support"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±1.5dB)": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "4 Hz – 8 kHz",
      "Dynamic Range (re.20µPa)": "12 dB – 138 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },

  /* ══════════════════════════════════════════════
     1/2-INCH MICROPHONE SETS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3201-S01",
    name: "CRY3201-S01",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Free-Field · Wide Bandwidth · BNC",
    image: "images/products/CRY3201-S01.jpg",
    description: "CRYSOUND 1/2-inch free-field Measurement Microphone Kit with ultra-wide 40 kHz bandwidth. Paired with IEPE-powered preamplifier for high-precision audio measurements.",
    applications: ["Wide-bandwidth acoustic testing", "Speaker and transducer measurement", "Precision lab measurements", "Noise testing"],
    highlights: ["Wide 40 kHz bandwidth", "High dynamic range 23–148 dB", "BNC interface with TEDS", "Complete kit for fast setup"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 40 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 148 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3203-S01",
    name: "CRY3203-S01",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · General Purpose · BNC",
    image: "images/products/CRY3203-S01.jpg",
    description: "The CRY3203-S01 general-purpose ½-inch microphone kit is an optimal solution for acoustic testing. Includes microphone + IEPE preamplifier with BNC interface and TEDS.",
    applications: ["General-purpose acoustic testing", "Noise measurement", "Electroacoustic testing", "Environmental noise assessment"],
    highlights: ["Complete general-purpose kit", "Optimal solution for acoustic testing", "BNC interface with TEDS", "15 dB–138 dB dynamic range"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "15 dB – 138 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3203-S02",
    name: "CRY3203-S02",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Free-Field · 10-32UNF",
    image: "images/products/CRY3203-S02.jpg",
    description: "½-inch free-field measurement microphone kit with 10-32UNF connector. Same acoustic performance as CRY3203-S01 in a 10-32UNF interface configuration.",
    applications: ["General-purpose acoustic testing", "Systems requiring 10-32UNF interface", "Noise measurement", "Electroacoustic testing"],
    highlights: ["10-32UNF interface", "Complete kit with IEPE preamplifier", "15 dB–138 dB dynamic range", "TEDS support"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "15 dB – 138 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3202-S01",
    name: "CRY3202-S01",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Pressure-Field · BNC",
    image: "images/products/CRY3202-S01.jpg",
    description: "½-inch pressure-field microphone kit with BNC interface. For coupler measurements, enclosed cavity testing, telecom and electroacoustic component testing.",
    applications: ["Coupler measurements", "Enclosed cavity testing", "Telecom component testing", "Electroacoustic testing"],
    highlights: ["Pressure-field optimized", "23 dB–150 dB dynamic range", "BNC interface with TEDS", "IEPE powered"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 150 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3202-S02",
    name: "CRY3202-S02",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Pressure-Field · 10-32UNF",
    image: "images/products/CRY3202-S02.jpg",
    description: "½-inch pressure-field kit with 10-32UNF connector. Same acoustic performance as CRY3202-S01 for systems requiring 10-32UNF interface.",
    applications: ["Pressure measurement with 10-32UNF systems", "Coupler measurements", "Electroacoustic testing"],
    highlights: ["10-32UNF interface", "Pressure-field optimized", "23 dB–150 dB dynamic range", "TEDS support"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity (±dB)": "12.5 mV/Pa, –38 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 150 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3204-S01",
    name: "CRY3204-S01",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Pressure-Field · High Sensitivity",
    image: "images/products/CRY3204-S01.jpg",
    description: "½-inch pressure-field kit with 50 mV/Pa high sensitivity. BNC interface. Optimized for high sound pressure level measurements up to 138 dB in enclosed cavities.",
    applications: ["High SPL enclosed cavity testing", "Coupler measurements", "Telecom component testing"],
    highlights: ["High 50 mV/Pa sensitivity", "Pressure-field optimized", "BNC with TEDS", "15 dB–138 dB range"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 10 kHz",
      "Dynamic Range (re.20µPa)": "15 dB – 138 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3261-S02",
    name: "CRY3261-S02",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set — Ultra-Low Noise",
    badge: "½″ Set · Ultra-Low Noise · 6.5 dBA",
    image: "images/products/CRY3261-S02.jpg",
    description: "The CRY3261-S02 is a 1/2-inch pre-polarized free-field high sound pressure measurement microphone set designed for noise measurements below 10dB. With a low background noise of just 6.5 dBA, it is an ideal choice for detecting and measuring ultra-low noise levels.",
    applications: ["Product self-noise testing", "Appliance noise measurement", "Transformer current noise", "Ultra-low noise level testing"],
    highlights: ["Ultra-low noise testing — 6.5 dBA noise floor", "Outstanding performance", "Wide compatibility", "Precision cleanroom assembled"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity (±2dB)": "450 mV/Pa, –7 dBV/Pa",
      "Frequency Response": "10 Hz – 16 kHz ±2 dB",
      "Dynamic Range (re.20µPa)": "6.5 dB – 100 dB (Typical: 6.0 dBA)",
      "Maximum Output Voltage": ">8.0 Vp",
      "Power Supply": "/",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3213",
    name: "CRY3213",
    category: "set",
    categoryLabel: "½″ Measurement Microphone Set",
    badge: "½″ Set · Free-Field · Standard",
    image: "images/products/CRY3213.jpg",
    description: "½-inch free-field measurement microphone set with BNC interface and IEPE-powered preamplifier. General-purpose solution for acoustic testing with TEDS support.",
    applications: ["General acoustic testing", "Environmental noise measurement", "Electroacoustic testing", "Noise measurement"],
    highlights: ["Complete kit with IEPE preamplifier", "BNC interface with TEDS", "17 dB–136 dB dynamic range", "Free-field optimized"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "50 mV/Pa, –26 dBV/Pa",
      "Frequency Response": "3.15 Hz – 20 kHz ±2 dB",
      "Dynamic Range (re.20µPa)": "17 dB – 136 dB",
      "Maximum Output Voltage": ">8.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "BNC",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },

  /* ══════════════════════════════════════════════
     1/4-INCH MICROPHONE SETS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3401-S01",
    name: "CRY3401-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Free-Field · SMB",
    image: "images/products/CRY3401-S01.jpg",
    description: "¼-inch free-field microphone kit with SMB connector and wide 40 kHz bandwidth. For precision acoustic testing with high SPL tolerance up to 148 dB.",
    applications: ["Wide-bandwidth acoustic testing", "Speaker measurement", "Precision lab testing", "High-frequency measurement"],
    highlights: ["Wide 40 kHz bandwidth", "SMB interface with TEDS", "26 dB–148 dB dynamic range", "Complete kit"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "15.8 mV/Pa, –36 dBV/Pa",
      "Frequency Response": "4 Hz – 40 kHz",
      "Dynamic Range (re.20µPa)": "26 dB – 148 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "SMB",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3402-S01",
    name: "CRY3402-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Pressure-Field · 70 kHz",
    image: "images/products/CRY3402-S01.jpg",
    description: "¼-inch pressure-field kit with 70 kHz bandwidth and extreme SPL tolerance up to 168 dB. For automotive, aerospace, and high-pressure component testing.",
    applications: ["Automotive acoustic testing", "Aerospace component testing", "High-intensity pressure measurement", "Wideband acoustic testing"],
    highlights: ["Ultra-wideband to 70 kHz", "168 dB SPL tolerance", "10-32UNF interface with TEDS", "Complete kit"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "1.6 mV/Pa, –56 dBV/Pa",
      "Frequency Response": "4 Hz – 70 kHz",
      "Dynamic Range (re.20µPa)": "45 dB – 168 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3402-S02",
    name: "CRY3402-S02",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Pressure-Field · 70 kHz · Alt Body",
    image: "images/products/CRY3402-S02.jpg",
    description: "¼-inch pressure-field kit — alternate body configuration of CRY3402-S01. 70 kHz bandwidth, 168 dB SPL tolerance. 10-32UNF interface.",
    applications: ["Automotive testing", "Aerospace acoustic testing", "High-intensity pressure measurement"],
    highlights: ["Alternate body configuration", "Ultra-wideband to 70 kHz", "168 dB SPL tolerance", "TEDS support"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "1.6 mV/Pa, –56 dBV/Pa",
      "Frequency Response": "4 Hz – 70 kHz",
      "Dynamic Range (re.20µPa)": "45 dB – 168 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3403-S01",
    name: "CRY3403-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Ultra-Wideband · 90 kHz · SMB",
    image: "images/products/CRY3403-S01.jpg",
    description: "Ultra-wideband ¼-inch microphone kit measuring frequencies up to 90 kHz. SMB connector. Compatible with CRYSOUND IEPE-powered preamplifiers. Ideal for high-frequency testing.",
    applications: ["Ultra-wideband acoustic testing", "High-frequency measurement", "Ultrasonic testing", "Speaker characterization"],
    highlights: ["Measures up to 90 kHz", "SMB interface with TEDS", "35 dB–160 dB dynamic range", "Complete kit"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "4 mV/Pa, –48 dBV/Pa",
      "Frequency Response": "4 Hz – 90 kHz",
      "Dynamic Range (re.20µPa)": "35 dB – 160 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "SMB",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3403-S02",
    name: "CRY3403-S02",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Ultra-Wideband · 90 kHz · 10-32UNF",
    image: "images/products/CRY3403-S02.jpg",
    description: "Ultra-wideband ¼-inch microphone kit measuring up to 90 kHz with 10-32UNF connector — alternate connector variant of CRY3403-S01.",
    applications: ["Ultra-wideband acoustic testing", "High-frequency measurement", "Systems requiring 10-32UNF"],
    highlights: ["Measures up to 90 kHz", "10-32UNF interface with TEDS", "35 dB–160 dB dynamic range", "Complete kit"],
    specs: {
      "Field Type": "Free-Field",
      "Sensitivity": "4 mV/Pa, –48 dBV/Pa",
      "Frequency Response": "4 Hz – 90 kHz",
      "Dynamic Range (re.20µPa)": "35 dB – 160 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3404-S01",
    name: "CRY3404-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Extreme SPL · 175 dB",
    image: "images/products/CRY3404-S01.jpg",
    description: "High-SPL ¼-inch microphone kit withstanding extreme sound pressure up to 175 dB. For reliable acoustic testing in high-intensity environments — aviation, ordnance testing, aerospace.",
    applications: ["Aviation engine noise testing", "Ordnance and explosion measurement", "Aerospace acoustic testing", "High-intensity industrial noise"],
    highlights: ["175 dB SPL tolerance", "Extreme environment capable", "10-32UNF interface with TEDS", "Complete kit"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "0.56 mV/Pa, –65 dBV/Pa",
      "Frequency Response": "10 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "53 dB – 175 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3406-S01",
    name: "CRY3406-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Pressure-Field · SMB",
    image: "images/products/CRY3406-S01.jpg",
    description: "¼-inch pressure-field microphone kit with SMB connector. Wide 26–148 dB dynamic range for versatile applications from precision lab measurements to industrial testing.",
    applications: ["Pressure-field acoustic testing", "Enclosed cavity measurements", "Industrial acoustic monitoring", "Lab testing"],
    highlights: ["SMB interface with TEDS", "26 dB–148 dB dynamic range", "Pressure-field optimized", "Complete kit"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "15.8 mV/Pa, –36 dBV/Pa",
      "Frequency Response": "4 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "26 dB – 148 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "SMB",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },
  {
    id: "CRY3408-S01",
    name: "CRY3408-S01",
    category: "set",
    categoryLabel: "¼″ Measurement Microphone Set",
    badge: "¼″ Set · Extreme SPL · 180 dB",
    image: "images/products/CRY3408-S01.jpg",
    description: "¼-inch pressure-field kit for extreme SPL environments up to 180 dB. Ultra-low sensitivity (0.14 mV/Pa) for measuring blasts, explosions, and highest-intensity industrial noise.",
    applications: ["Blast and explosion measurement", "Extreme industrial noise testing", "Aviation high-intensity testing", "Ordnance testing"],
    highlights: ["180 dB SPL tolerance — highest in range", "Ultra-low sensitivity for extreme SPL", "10-32UNF interface with TEDS", "Complete kit"],
    specs: {
      "Field Type": "Pressure-Field",
      "Sensitivity": "0.14 mV/Pa, –77 dBV/Pa",
      "Frequency Response": "10 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "70 dB – 180 dB",
      "Maximum Output Voltage": ">10.0 Vp",
      "Power Supply": "IEPE (2–20 mA)",
      "Interface Type": "10-32UNF",
      "TEDS": "IEEE 1451.4 V1.0"
    }
  },

  /* ══════════════════════════════════════════════
     EAR SIMULATORS & COUPLERS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3711",
    name: "CRY3711",
    category: "ear",
    categoryLabel: "Ear Simulator",
    badge: "Ear Simulator · IEC 60318-4",
    image: "images/products/CRY3711.jpg",
    description: "CrySound artificial ear precisely simulates human ear acoustics per IEC 60318-4. Ideal for standardized testing of headphones, hearing aids, and in-ear devices. Compliant with IEC 60318 and other international standards.",
    applications: ["In-ear headphone testing", "Hearing aid testing", "Earbud acoustic measurement", "IEC 60318-4 standardized testing"],
    highlights: ["IEC 60318-4 compliant", "100 Hz–10 kHz ±1 dB accuracy", "1.26 cm³ equivalent volume", "Globally recognized test solution"],
    specs: {
      "Standard": "IEC 60318-4",
      "Frequency Response": "100 Hz – 10 kHz ±1 dB (ear impedance)",
      "Coupling Cavity Use": "20 Hz – 16 kHz",
      "Equivalent Volume": "1.26 cm³",
      "Weight": "72 g"
    }
  },
  {
    id: "CRY3718",
    name: "CRY3718",
    category: "ear",
    categoryLabel: "Ear Simulator",
    badge: "Ear Simulator · IEC 60318-1",
    image: "images/products/CRY3718.jpg",
    description: "CrySound artificial ear per IEC 60318-1, simulating the acoustic impedance of the human ear canal. For over-ear headphone and hearing aid standardized testing. Coupling cavity range 20 Hz–16 kHz.",
    applications: ["Over-ear headphone testing", "Hearing aid testing", "IEC 60318-1 standardized testing", "Electroacoustic product testing"],
    highlights: ["IEC 60318-1 compliant", "100 Hz–4 kHz ±1 dB accuracy", "Wide coupling cavity range", "Globally recognized standard"],
    specs: {
      "Standard": "IEC 60318-1",
      "Frequency Response": "100 Hz – 4 kHz ±1 dB (ear impedance)",
      "Coupling Cavity Use": "20 Hz – 16 kHz",
      "Weight": "147 g"
    }
  },
  {
    id: "CRY3717",
    name: "CRY3717",
    category: "ear",
    categoryLabel: "Ear Coupler",
    badge: "Ear Coupler · IEC 60318-3 · 6 cm³",
    image: "images/products/CRY3717.jpg",
    description: "IEC 60318-3 occluded-ear canal simulator. 6 cm³ cavity volume. For standardized testing of insert earphones and hearing aids that fit inside the ear canal.",
    applications: ["Insert earphone testing", "Hearing aid testing", "IEC 60318-3 standardized measurements", "Electroacoustic product evaluation"],
    highlights: ["IEC 60318-3 compliant", "6 cm³ occluded-ear canal simulation", "100 Hz–8 kHz ±2 dB", "Internationally recognized standard"],
    specs: {
      "Standard": "IEC 60318-3",
      "Frequency Response": "100 Hz – 8 kHz ±2 dB",
      "Equivalent Volume": "6 cm³",
      "Weight": "355 g"
    }
  },
  {
    id: "CRY3719",
    name: "CRY3719",
    category: "ear",
    categoryLabel: "Ear Coupler",
    badge: "Ear Coupler · IEC 60318-5 · 2 cm³",
    image: "images/products/CRY3719.jpg",
    description: "IEC 60318-5 ear canal coupler. 2 cm³ cavity volume. For testing hearing aids and insert earphones according to IEC standards.",
    applications: ["Hearing aid testing", "Insert earphone evaluation", "IEC 60318-5 standardized measurements"],
    highlights: ["IEC 60318-5 compliant", "2 cm³ ear canal coupler", "125 Hz–8 kHz range", "Compact lightweight design"],
    specs: {
      "Standard": "IEC 60318-5",
      "Frequency Response": "125 Hz – 8 kHz",
      "Equivalent Volume": "2 cm³",
      "Weight": "50 g"
    }
  },
  {
    id: "CRY3711-S01",
    name: "CRY3711-S01",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-4 · BNC",
    image: "images/products/CRY3711-S01.jpg",
    description: "Base-mounted artificial ear kit widely used for acoustic measurements of in-ear headphones. Complies with IEC 61094-4. BNC interface, ready-to-use configuration.",
    applications: ["In-ear headphone acoustic measurement", "Standardized IEC 61094-4 testing", "Hearing aid performance evaluation", "Earphone production testing"],
    highlights: ["IEC 61094-4 compliant", "Base-mounted for stability", "BNC interface, ready to use", "23 dB–146 dBA dynamic range"],
    specs: {
      "Standard": "IEC 61094-4",
      "Frequency Response (ear impedance)": "100 Hz – 10 kHz",
      "Frequency Response (coupling cavity)": "20 Hz – 16 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 146 dBA",
      "Interface Type": "BNC"
    }
  },
  {
    id: "CRY3721-S01",
    name: "CRY3721-S01",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-4 · Ultra-Low Noise",
    image: "images/products/CRY3721-S01.jpg",
    description: "Ear simulator set compliant with IEC 61094-4. Wide 20 Hz–20 kHz frequency coverage with ultra-low noise floor of 7.5 dBA for high-fidelity headphone measurement.",
    applications: ["High-fidelity headphone testing", "Ultra-low noise measurement", "IEC 61094-4 standardized testing"],
    highlights: ["Ultra-low 7.5 dBA noise floor", "Full 20 Hz–20 kHz audio band coverage", "IEC 61094-4 compliant", "Up to 115 dBA dynamic range"],
    specs: {
      "Standard": "IEC 61094-4",
      "Frequency Response": "20 Hz – 20 kHz",
      "Dynamic Range (re.20µPa)": "7.5 dB – 115 dBA"
    }
  },
  {
    id: "CRY3719-S01",
    name: "CRY3719-S01",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-5 · SMB",
    image: "images/products/CRY3719-S01.jpg",
    description: "Ear simulator kit for IEC 61094-5. SMB interface with 23–146 dB dynamic range. For insert earphone and small hearing device acoustic measurement.",
    applications: ["Insert earphone testing", "IEC 61094-5 standardized testing", "Hearing aid measurement"],
    highlights: ["IEC 61094-5 compliant", "SMB interface", "23 dB–146 dB dynamic range", "125 Hz–8 kHz frequency range"],
    specs: {
      "Standard": "IEC 61094-5",
      "Frequency Response": "125 Hz – 8 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 146 dB",
      "Interface Type": "SMB"
    }
  },
  {
    id: "CRY3717-S01",
    name: "CRY3717-S01",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-3 · BNC",
    image: "images/products/CRY3717-S01.jpg",
    description: "Occluded-ear canal simulator kit per IEC 61094-3. BNC interface with 12–132 dB dynamic range. For standardized hearing aid and insert earphone measurements.",
    applications: ["Hearing aid testing", "Insert earphone measurement", "IEC 61094-3 standardized testing"],
    highlights: ["IEC 61094-3 compliant", "BNC interface", "12 dB–132 dB dynamic range", "100 Hz–8 kHz range"],
    specs: {
      "Standard": "IEC 61094-3",
      "Frequency Response": "100 Hz – 8 kHz",
      "Dynamic Range (re.20µPa)": "12 dB – 132 dB",
      "Interface Type": "BNC"
    }
  },
  {
    id: "CRY3718-S01",
    name: "CRY3718-S01",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-1 · BNC",
    image: "images/products/CRY3718-S01.jpg",
    description: "IEC 61094-1 compliant ear simulator kit with BNC interface. Simulates human ear impedance (100 Hz–4 kHz) and coupling cavity acoustics (20 Hz–16 kHz) for over-ear device testing.",
    applications: ["Over-ear headphone testing", "Hearing aid measurement", "IEC 61094-1 standardized testing"],
    highlights: ["IEC 61094-1 compliant", "BNC interface", "Dual-range measurement (ear impedance + cavity)", "23 dB–146 dB dynamic range"],
    specs: {
      "Standard": "IEC 61094-1",
      "Frequency Response (ear impedance)": "100 Hz – 4 kHz",
      "Frequency Response (coupling cavity)": "20 Hz – 16 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 146 dB",
      "Interface Type": "BNC"
    }
  },
  {
    id: "CRY3718-S05",
    name: "CRY3718-S05",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-1 · with Coupler Accessories",
    image: "images/products/CRY3718-S05.jpg",
    description: "IEC 61094-1 kit with BNC interface, TA0701 IEC 60318-1 coupler, and TA0515 adapter included. Complete solution for over-ear headphone and hearing aid testing.",
    applications: ["Over-ear headphone testing", "Hearing aid testing with coupler", "IEC 61094-1 complete measurement system"],
    highlights: ["Complete kit with coupler accessories", "IEC 61094-1 compliant", "Includes TA0701 + TA0515 Adapter", "BNC interface"],
    specs: {
      "Standard": "IEC 61094-1",
      "Frequency Response (ear impedance)": "100 Hz – 4 kHz",
      "Frequency Response (coupling cavity)": "20 Hz – 16 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 146 dB",
      "Interface Type": "BNC",
      "Coupler Accessories": "TA0701 IEC 60318-1 + TA0515 Adapter"
    }
  },
  {
    id: "CRY3718-S07",
    name: "CRY3718-S07",
    category: "ear",
    categoryLabel: "Ear Simulator Kit",
    badge: "Ear Simulator Set · IEC 61094-1 · SMB · with Coupler",
    image: "images/products/CRY3718-S07.jpg",
    description: "IEC 61094-1 kit with SMB interface, TA0701 IEC 60318-1 coupler, and TA0515 adapter. SMB variant for use with compatible measurement systems.",
    applications: ["Over-ear headphone testing with SMB systems", "IEC 61094-1 standardized testing", "Hearing aid measurement with coupler"],
    highlights: ["SMB interface variant", "IEC 61094-1 compliant", "Includes TA0701 + TA0515 Adapter", "Complete measurement solution"],
    specs: {
      "Standard": "IEC 61094-1",
      "Frequency Response (ear impedance)": "100 Hz – 4 kHz",
      "Frequency Response (coupling cavity)": "20 Hz – 16 kHz",
      "Dynamic Range (re.20µPa)": "23 dB – 146 dB",
      "Interface Type": "SMB",
      "Coupler Accessories": "TA0701 IEC 60318-1 + TA0515 Adapter"
    }
  },

  /* ══════════════════════════════════════════════
     SOUND SOURCES
  ══════════════════════════════════════════════ */
  {
    id: "CRY3602",
    name: "CRY3602",
    category: "sound",
    categoryLabel: "Mouth Simulator",
    badge: "Mouth Simulator · ø51mm · Built-in Amp · BNC",
    image: "images/products/CRY3602.jpg",
    description: "CRYSOUND artificial mouth simulator compliant with ITU-T P.51 and IEC 60268-16. Built-in 20W power amplifier with BNC interface. Designed for accurate sound field reproduction for audio equipment measurements.",
    applications: ["Telephone handset acoustic testing", "Communication device measurement", "Audio equipment evaluation", "Compliance testing per ITU-T P.51"],
    highlights: ["ITU-T P.51 and IEC 60268-16 compliant", "Built-in 20W power amplifier", "Low THD < 1.5%", "BNC interface"],
    specs: {
      "Max Output SPL (200Hz–10kHz)": "110 dB",
      "Max Output SPL (100Hz–10kHz)": "100 dB",
      "THD (94dB, 25mmMRP)": "<1.5% (200–10kHz), Typical: <1.0%",
      "Lip Ring Diameter": "ø51 mm",
      "Mouth Opening Diameter": "ø20 mm",
      "Built-in Amplifier Gain": "20 dB",
      "Built-in Amplifier Power": "20 W",
      "Interface Type": "BNC",
      "Power Supply": "Power Adapter (220V Input, 15V Output)"
    }
  },
  {
    id: "CRY3603",
    name: "CRY3603",
    category: "sound",
    categoryLabel: "Mouth Simulator",
    badge: "Mouth Simulator · ø100mm · 40 kHz · 10-32UNF",
    image: "images/products/CRY3603.jpg",
    description: "High-frequency artificial mouth extending to 40 kHz. Large 100mm lip ring diameter for broadband acoustic measurements. 10-32UNF interface. Compliant with ITU-T P.51 and IEC 60268-16.",
    applications: ["Broadband audio device testing", "High-frequency acoustic measurements up to 40 kHz", "Wideband communication device testing"],
    highlights: ["Ultra-wideband to 40 kHz", "Large ø100mm lip ring", "Low THD < 1.5%", "10-32UNF interface"],
    specs: {
      "Max Output SPL (500Hz–40kHz)": "110 dB",
      "Max Output SPL (200Hz–50kHz)": "100 dB",
      "THD (94dB, 25mmMRP)": "<1.5% (1K–40kHz), Typical: <1.0%",
      "Lip Ring Diameter": "ø100 mm",
      "Mouth Opening Diameter": "ø20 mm",
      "Height": "28 mm",
      "Interface Type": "10-32UNF",
      "Power Supply": "10-32UNF"
    }
  },
  {
    id: "CRY3605",
    name: "CRY3605",
    category: "sound",
    categoryLabel: "Mouth Simulator",
    badge: "Mouth Simulator · ø45mm · Low Distortion · BNC",
    image: "images/products/CRY3605.jpg",
    description: "Compact artificial mouth (ø45mm) with ultra-low distortion (THD < 0.5% typical). BNC interface. High-precision solution for telephone handset and communication device testing. ITU-T P.51 and IEC 60268-16 compliant.",
    applications: ["Precision telephone handset testing", "Communication device evaluation", "Low-distortion acoustic source", "Compliance testing"],
    highlights: ["Ultra-low THD < 0.5% typical", "Compact ø45mm design", "BNC interface", "Highest precision in mouth simulator range"],
    specs: {
      "Max Output SPL (200Hz–10kHz)": "110 dB",
      "Max Output SPL (100Hz–10kHz)": "100 dB",
      "THD (94dB, 25mmMRP)": "<0.8% (200–10kHz), Typical: <0.5%",
      "Lip Ring Diameter": "ø45 mm",
      "Mouth Opening Diameter": "ø20 mm",
      "Height": "25 mm",
      "Interface Type": "BNC",
      "Power Supply": "BNC"
    }
  },
  {
    id: "CRY3611",
    name: "CRY3611",
    category: "sound",
    categoryLabel: "Reference Speaker",
    badge: "Reference Speaker · Far-Field · 45W · Coaxial",
    image: "images/products/CRY3611.jpg",
    description: "Far-field coaxial reference sound source specifically designed for precise acoustic testing. Provides low distortion and wide frequency response, ensuring the accuracy and reliability of test results.",
    applications: ["Acoustic system calibration", "Far-field acoustic testing", "Microphone frequency response testing", "Acoustic research"],
    highlights: ["94 dB ±0.2 dB output SPL (after compensation)", "THD < 0.5% typical", "45W continuous power", "165mm loudspeaker"],
    specs: {
      "Output Sound Pressure": "94 dB ±0.2 dB (100 Hz–15 kHz, after compensation)",
      "THD (94dB, 25mmMRP)": "200Hz–10kHz: <1%, Typical <0.5%",
      "Continuous Maximum Power": "45 W",
      "Loudspeaker Diameter": "165 mm",
      "Size (H×L×W mm)": "300 × 240 × 120 mm"
    }
  },

  /* ══════════════════════════════════════════════
     ACCELEROMETERS
  ══════════════════════════════════════════════ */
  {
    id: "CRY431",
    name: "CRY431",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · Top M5 · ±1000g",
    image: "images/products/CRY431.jpg",
    description: "IEPE piezoelectric accelerometer with Top M5 connector. Wide ±1000g measuring range for industrial vibration monitoring of acceleration, velocity, and displacement.",
    applications: ["Industrial vibration monitoring", "Machine health monitoring", "Structural vibration testing", "NVH testing"],
    highlights: ["Wide ±1000g measuring range", "Top M5 connector", "IEPE powered", "1 Hz–12 kHz bandwidth"],
    specs: {
      "Sensitivity (160Hz)": "5 mV/g",
      "Frequency Response": "1 Hz – 12 kHz (±1 dB)",
      "Measuring Range (Peak)": "±1000 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Top M5",
      "Weight": "9.5 g"
    }
  },
  {
    id: "CRY432",
    name: "CRY432",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · Side M5 · ±1000g",
    image: "images/products/CRY432.jpg",
    description: "IEPE piezoelectric accelerometer with Side M5 connector. Same wide ±1000g range as CRY431 in a side-mounted configuration for constrained mounting locations.",
    applications: ["Industrial vibration monitoring", "Side-mounted installations", "Machine health monitoring", "Structural testing"],
    highlights: ["Side M5 connector for constrained spaces", "Wide ±1000g measuring range", "IEPE powered", "1 Hz–12 kHz bandwidth"],
    specs: {
      "Sensitivity (160Hz)": "5 mV/g",
      "Frequency Response": "1 Hz – 12 kHz (±1 dB)",
      "Measuring Range (Peak)": "±1000 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Side M5",
      "Weight": "9.5 g"
    }
  },
  {
    id: "CRY433",
    name: "CRY433",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · High Sensitivity · Top M5",
    image: "images/products/CRY433.jpg",
    description: "High-sensitivity 100 mV/g IEPE accelerometer with Top M5 connector. ±50g range for precise vibration measurement of moderate-level vibrations.",
    applications: ["Precision vibration measurement", "Modal analysis", "Machine vibration monitoring", "Structural health monitoring"],
    highlights: ["High 100 mV/g sensitivity", "Top M5 connector", "±50g measuring range", "0.5 Hz–8 kHz bandwidth"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "0.5 Hz – 8 kHz (±1 dB)",
      "Measuring Range (Peak)": "±50 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Top M5",
      "Weight": "13 g"
    }
  },
  {
    id: "CRY434",
    name: "CRY434",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · High Sensitivity · Side M5",
    image: "images/products/CRY434.jpg",
    description: "High-sensitivity 100 mV/g IEPE accelerometer with Side M5 connector. ±50g range. Side-mounted variant of CRY433 for constrained mounting applications.",
    applications: ["Side-mounted precision vibration measurement", "Modal analysis", "Constrained space installations", "Machine vibration monitoring"],
    highlights: ["High 100 mV/g sensitivity", "Side M5 connector", "±50g measuring range", "0.5 Hz–8 kHz bandwidth"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "0.5 Hz – 8 kHz (±1 dB)",
      "Measuring Range (Peak)": "±50 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Side M5",
      "Weight": "13 g"
    }
  },
  {
    id: "CRY435",
    name: "CRY435",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · MIL Connector · ±50g",
    image: "images/products/CRY435.jpg",
    description: "High-sensitivity 100 mV/g IEPE accelerometer with ruggedized 2-pin MIL-C-5015 connector. Larger body (70g) for harsh industrial environments. ±50g measuring range.",
    applications: ["Harsh industrial vibration monitoring", "Military and defense applications", "High-temperature environments", "Heavy machinery monitoring"],
    highlights: ["MIL-C-5015 rugged connector", "High 100 mV/g sensitivity", "±50g range", "Heavy-duty 70g body"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "1 Hz – 6 kHz (±10%), 0.5–10 kHz (±3dB)",
      "Measuring Range (Peak)": "±50 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "2-pin MIL-C-5015",
      "Weight": "70 g"
    }
  },
  {
    id: "CRY436",
    name: "CRY436",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · MIL Connector · 48g",
    image: "images/products/CRY436.jpg",
    description: "High-sensitivity 100 mV/g IEPE accelerometer with ruggedized 2-pin MIL-C-5015 connector. 48g body for harsh environments with wide frequency response up to 20 kHz.",
    applications: ["Harsh industrial environments", "Military applications", "Machinery vibration monitoring", "Structural health monitoring"],
    highlights: ["MIL-C-5015 rugged connector", "Wide 20 kHz bandwidth", "±50g range", "100 mV/g high sensitivity"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "1 Hz – 12 kHz (±10%), 0.5–20 kHz (±3dB)",
      "Measuring Range (Peak)": "±50 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "2-pin MIL-C-5015",
      "Weight": "48 g"
    }
  },
  {
    id: "CRY437",
    name: "CRY437",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · Ultra-Miniature · 2g",
    image: "images/products/CRY437.jpg",
    description: "Ultra-miniature IEPE accelerometer weighing only 2g with M5 connector. Ideal for lightweight structures, cables, and small components where mass loading must be minimized. ±500g range.",
    applications: ["Lightweight structure testing", "Cable vibration measurement", "Small component testing", "Mass-loading-sensitive applications"],
    highlights: ["Ultra-lightweight — only 2g", "Minimal mass loading effect", "Top M5 connector", "±500g measuring range"],
    specs: {
      "Sensitivity (160Hz)": "10 mV/g",
      "Frequency Response": "2 Hz – 8 kHz (±1 dB)",
      "Measuring Range (Peak)": "±500 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "M5",
      "Weight": "2 g"
    }
  },
  {
    id: "CRY438",
    name: "CRY438",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · Top M5 · High-Freq · ±500g",
    image: "images/products/CRY438.jpg",
    description: "IEPE accelerometer with Top M5 connector and wide frequency response up to 10 kHz (±1 dB). High ±500g peak range for demanding vibration environments requiring both high SPL and wide bandwidth.",
    applications: ["High-frequency vibration testing", "Industrial machinery monitoring", "High-impact testing", "Shock measurement"],
    highlights: ["Wide 10 kHz (±1dB) bandwidth", "High ±500g peak range", "Top M5 connector", "Compact 9.5g body"],
    specs: {
      "Sensitivity (160Hz)": "10 mV/g",
      "Frequency Response": "1 Hz – 10 kHz (±1 dB), 0.5–20 kHz (±3dB)",
      "Measuring Range (Peak)": "±500 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Top M5",
      "Weight": "9.5 g"
    }
  },
  {
    id: "CRY441",
    name: "CRY441",
    category: "accel",
    categoryLabel: "Charge-Mode Accelerometer",
    badge: "Charge-Mode Accelerometer · Self-Powered · ±2500g",
    image: "images/products/CRY441.jpg",
    description: "Charge-mode piezoelectric accelerometer with ±2500g peak range. Self-powered, ideal for high-shock testing in harsh environments where IEPE power is unavailable.",
    applications: ["High-shock testing", "Harsh environment monitoring", "Applications without IEPE power", "Military and defense testing"],
    highlights: ["Self-powered — no IEPE required", "Extreme ±2500g measuring range", "Charge-mode piezoelectric", "Side M5 connector"],
    specs: {
      "Sensitivity (160Hz)": "5 pC/g",
      "Frequency Response": "1 Hz – 10 kHz (±10%)",
      "Measuring Range (Peak)": "±2500 g",
      "Power Supply": "Self-powered (Charge mode)",
      "Connector Type": "Side M5",
      "Weight": "7.5 g"
    }
  },
  {
    id: "CRY442",
    name: "CRY442",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · 4-Pin · Low-Freq · 100 mV/g",
    image: "images/products/CRY442.jpg",
    description: "High-sensitivity 100 mV/g IEPE accelerometer with 1/4-28 4-pin connector. Wide frequency range down to 0.5 Hz for low-frequency structural and machinery vibration monitoring.",
    applications: ["Low-frequency structural vibration", "Machinery vibration monitoring", "Infrastructure health monitoring", "Seismic measurement"],
    highlights: ["Low-frequency coverage from 0.5 Hz", "High 100 mV/g sensitivity", "1/4-28 4-pin connector", "±50g measuring range"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "0.5 Hz – 5 kHz (±1 dB)",
      "Measuring Range (Peak)": "±50 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "1/4-28 4-pin",
      "Weight": "18 g"
    }
  },
  {
    id: "CRY443",
    name: "CRY443",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · M12 · 50 mV/g · 95g",
    image: "images/products/CRY443.jpg",
    description: "Industrial IEPE accelerometer with Side M12 4-pin connector. 50 mV/g sensitivity with ±100g measuring range. Robust 95g body for heavy machinery vibration and industrial monitoring.",
    applications: ["Heavy machinery vibration monitoring", "Industrial equipment testing", "Production line monitoring", "Robust field deployments"],
    highlights: ["Industrial Side M12 4-pin connector", "50 mV/g sensitivity", "±100g measuring range", "Heavy-duty 95g body"],
    specs: {
      "Sensitivity (160Hz)": "50 mV/g",
      "Frequency Response": "1 Hz – 4 kHz (±10%), 0.7–8 kHz (±3dB)",
      "Measuring Range (Peak)": "±100 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Side M12, 4-pin",
      "Weight": "95 g"
    }
  },
  {
    id: "CRY445",
    name: "CRY445",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · M12 · 100 mV/g · High Sensitivity",
    image: "images/products/CRY445.jpg",
    description: "High-sensitivity 100 mV/g industrial accelerometer with Side M12 4-pin connector. ±80g peak range for precise machinery vibration monitoring in industrial environments.",
    applications: ["Precision industrial vibration monitoring", "Machinery health assessment", "Production line quality testing", "High-sensitivity industrial measurement"],
    highlights: ["High 100 mV/g sensitivity", "Side M12 4-pin connector", "±80g measuring range", "Heavy-duty 95g industrial body"],
    specs: {
      "Sensitivity (160Hz)": "100 mV/g",
      "Frequency Response": "1 Hz – 4 kHz (±1 dB), 0.5–8 kHz (±3dB)",
      "Measuring Range (Peak)": "±80 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Side M12, 4-pin",
      "Weight": "95 g"
    }
  },
  {
    id: "CRY446",
    name: "CRY446",
    category: "accel",
    categoryLabel: "IEPE Accelerometer",
    badge: "IEPE Accelerometer · 4-Pin · ±500g",
    image: "images/products/CRY446.jpg",
    description: "Compact IEPE accelerometer with Side 1/4-28 4-pin connector and high ±500g measuring range. For shock and vibration testing in industrial machinery and structural monitoring requiring high SPL tolerance.",
    applications: ["Shock and vibration testing", "Industrial machinery monitoring", "Structural vibration assessment", "High-range vibration measurement"],
    highlights: ["High ±500g measuring range", "Side 1/4-28 4-pin connector", "Compact 12g body", "1 Hz–5 kHz bandwidth"],
    specs: {
      "Sensitivity (160Hz)": "10 mV/g",
      "Frequency Response": "1 Hz – 5 kHz (±1 dB)",
      "Measuring Range (Peak)": "±500 g",
      "Power Supply": "IEPE (2–10 mA)",
      "Connector Type": "Side 1/4-28 4-pin",
      "Weight": "12 g"
    }
  },

  /* ══════════════════════════════════════════════
     ACCESSORIES & CALIBRATORS
  ══════════════════════════════════════════════ */
  {
    id: "CRY3018",
    name: "CRY3018",
    category: "accessory",
    categoryLabel: "Sound Calibrator",
    badge: "Sound Calibrator · IEC 60942:2017 Class 1",
    image: "images/products/CRY3018.jpg",
    description: "Portable, high-precision acoustic calibrator compliant with IEC 60942:2017 Class 1. Supports dual frequencies (250 Hz / 1000 Hz) and dual SPL levels (94 dB / 114 dB). Features built-in temperature/humidity/barometric sensors for adaptive environmental compensation. OLED display, USB-C fast charging, carbon-fiber housing.",
    applications: ["Sound level meter calibration", "Microphone sensitivity testing", "Acoustic measurement system calibration", "On-site field calibration"],
    highlights: ["IEC 60942:2017 Class 1 certified", "94 dB / 114 dB dual SPL levels", "250 Hz / 1000 Hz dual calibration frequencies", "Built-in environmental compensation sensors", "Automatic shutdown feature", "Durable carbon-fiber housing with OLED display"],
    specs: {
      "Frequencies": "1000 Hz, 250 Hz",
      "Frequency Accuracy": "< 0.5 Hz",
      "Sound Pressure Levels": "94 dB / 114 dB",
      "SPL Accuracy": "< 0.2 dB",
      "Short-term Level Variation": "< 0.05 dB",
      "THD+N": "< 1%",
      "Supported Microphones": "1″, ½″, ¼″, ⅛″",
      "Operating Temperature": "–10°C to +50°C (14°F to 122°F)",
      "Operating Pressure": "65 kPa – 108 kPa",
      "Operating Humidity": "0 to 90%RH, no condensation",
      "Power": "Built-in Lithium Battery, USB-C (5V, 1A)",
      "Compliance Standard": "IEC 60942:2017 Class 1"
    }
  },
  {
    id: "CRY575",
    name: "CRY575 / CRY575L",
    category: "accessory",
    categoryLabel: "Microphone Power Supply",
    badge: "Microphone Power Supply · 3-Channel / 2-Channel",
    image: "images/products/CRY575.jpg",
    description: "Multi-channel microphone power supplies. CRY575 offers 3-channel (2× IEPE + 1× constant voltage), CRY575L offers 2-channel (constant voltage). Switchable gain 0/+20/+40 dB, low background noise, BNC interface.",
    applications: ["Multi-channel microphone powering", "Externally polarized microphone supply", "Signal conditioning for measurement chains", "Laboratory acoustic setups"],
    highlights: ["CRY575: 3 channels (2× IEPE + 1× Const. V)", "CRY575L: 2 channels (Constant Voltage)", "Switchable gain: 0/+20/+40 dB", "Low background noise –103 dBV"],
    specs: {
      "CRY575 Channels": "3 (2× IEPE + 1× Constant Voltage)",
      "CRY575L Channels": "2 (Constant Voltage)",
      "Frequency Response": "10 Hz – 60 kHz (±0.5 dB)",
      "Gain Options": "0 dB / +20 dB / +40 dB",
      "Background Noise (CRY575)": "–103 dBV",
      "Interface": "BNC"
    }
  },
  {
    id: "CRY802",
    name: "CRY802",
    category: "accessory",
    categoryLabel: "ATF Test Fixture",
    badge: "ATF Hearing Protection Headphone Test Fixture · ISO 4869-3",
    image: "images/products/CRY802.jpg",
    description: "The CRY802 ATF Hearing Protection Headphone Test Fixture is designed for testing over-ear headphones and hearing protection devices such as earmuffs and earplugs. Constructed from oxidized and blackened aluminum, it offers enhanced robustness. The fixture is mounted on a resilient base to minimize the noise floor in typical test situations. Can be configured with the CRY711 Ear Simulator for headphone testing.",
    applications: ["Over-ear headphone acoustic testing", "Earmuff insertion loss measurement", "Earphone sound quality evaluation", "Hearing protection device testing"],
    highlights: ["Compatible with multiple ear simulators including CRY711", "Reduces noise floor to minimum in test situations", "Easy to assemble", "Creates realistic reproduction of headphone wear scenario", "ISO 4869-3 compliant"],
    specs: {
      "Weight": "11.6 kg",
      "Material": "Oxidized and blackened aluminum",
      "Max-Width": "155.6 mm",
      "Height": "477.3 mm",
      "Diameter": "135 mm",
      "Acoustic Isolation": "63 Hz–250 Hz: >50 dB; 315 Hz–4 kHz: >65 dB",
      "Design Standard": "ISO 4869-3",
      "Ear Simulator Compatibility": "IEC 60318-4(2010), IEC 60318-1(2009)"
    }
  }

];

/* ──────────────────────────────────────
   Helper: look up a product by ID
────────────────────────────────────── */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
