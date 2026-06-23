export interface Car {
  id: number;
  brand: string;
  name: string;
  price: string;
  image: string;
  seats: number;
  power: number;
  transmission: string;
  type: string;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "Mercedes-AMG",
    name: "Brabus GLE Coupe",
    price: "Rp 15.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhoST7BzgBOrbeqnCtfSxa9-1Omw0Tcsi1zBs9aL2fRb-iW3f9rz2VUsBwea7SbSM5bTyosKAzLcFOW00BagVWr1zxZNVDBrmCSlEipDTR8Q0Oj0fvY6UJEBg5SRpE8WKYHnWfmx-i2_ZwDqmKBgVQBkiJz4HdvakOrHx9z7pA-lL1-X5iKArQAoxcP-70rD98QRSsn4a8WPSFzpzzenUIaVpNCpP3p_0_uSUIQlgcLDLGONJuc73fVRSKl2WzQ_ct2Sma6DSAx0M",
    seats: 5,
    power: 800,
    transmission: "Automatic",
    type: "SUV"
  },
  {
    id: 2,
    brand: "Ferrari",
    name: "Testarossa",
    price: "Rp 10.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkmqi3UzBDHNsgkL15l_5j-JClNrCq4Wp_vWAZcV4R4dKGpZ1vqSQHiQnd9UBlIfH9RfKJH0EV7zuI_pRKNASMr3Fq1MX_u2Ii7VZIV-DbdEOHAVDe5bIsWLAsjJWGJPFRkCecrSYH_E2cM66GSdYUySIwBX6imOTWdON8D-T4QJxD3tWx3YWQilIVqRrNuYSOhAsVevn0LMvIqPRnfD_2OtbnmIkUfJ58a0SwQ5anwEEdbbG1TgDiRpTiaJ5pmnSYv8sOHzUgwLI",
    seats: 2,
    power: 390,
    transmission: "Manual",
    type: "Classic"
  },
  {
    id: 3,
    brand: "McLaren",
    name: "720S",
    price: "Rp 25.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcM-2CXz0L1YZyEN6G6QSbRTK015_IVx1LXu0Qkc652GduXev0QVsaJCIzBmlYtLvK0tb5VdoLH1CHIUnVcTHaGG6KVLYtyGzZxYFYctgfpRqA2KuAp1ZldLsiVgazYI3AbcMLtKwcyopeJAI-AHRKwiZceJNxqPEUezIZ-lynGn669sYnb3C_cddnqrdN0TgC-VzE_sTpaO3z2HdGJ8pIWYOtw93MehxLmS9S01ZmwqY4znLHW0Wo_1G6WJCtV4Eoc4LXvN1AH8PU",
    seats: 2,
    power: 710,
    transmission: "Automatic",
    type: "Supercar"
  },
  {
    id: 4,
    brand: "Lamborghini",
    name: "Aventador SVJ",
    price: "Rp 35.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhoST7BzgBOrbeqnCtfSxa9-1Omw0Tcsi1zBs9aL2fRb-iW3f9rz2VUsBwea7SbSM5bTyosKAzLcFOW00BagVWr1zxZNVDBrmCSlEipDTR8Q0Oj0fvY6UJEBg5SRpE8WKYHnWfmx-i2_ZwDqmKBgVQBkiJz4HdvakOrHx9z7pA-lL1-X5iKArQAoxcP-70rD98QRSsn4a8WPSFzpzzenUIaVpNCpP3p_0_uSUIQlgcLDLGONJuc73fVRSKl2WzQ_ct2Sma6DSAx0M",
    seats: 2,
    power: 770,
    transmission: "Automatic",
    type: "Supercar"
  },
  {
    id: 5,
    brand: "Porsche",
    name: "911 GT3 RS",
    price: "Rp 20.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkmqi3UzBDHNsgkL15l_5j-JClNrCq4Wp_vWAZcV4R4dKGpZ1vqSQHiQnd9UBlIfH9RfKJH0EV7zuI_pRKNASMr3Fq1MX_u2Ii7VZIV-DbdEOHAVDe5bIsWLAsjJWGJPFRkCecrSYH_E2cM66GSdYUySIwBX6imOTWdON8D-T4QJxD3tWx3YWQilIVqRrNuYSOhAsVevn0LMvIqPRnfD_2OtbnmIkUfJ58a0SwQ5anwEEdbbG1TgDiRpTiaJ5pmnSYv8sOHzUgwLI",
    seats: 2,
    power: 520,
    transmission: "Automatic",
    type: "Sports Car"
  },
  {
    id: 6,
    brand: "Aston Martin",
    name: "DBS Superleggera",
    price: "Rp 22.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcM-2CXz0L1YZyEN6G6QSbRTK015_IVx1LXu0Qkc652GduXev0QVsaJCIzBmlYtLvK0tb5VdoLH1CHIUnVcTHaGG6KVLYtyGzZxYFYctgfpRqA2KuAp1ZldLsiVgazYI3AbcMLtKwcyopeJAI-AHRKwiZceJNxqPEUezIZ-lynGn669sYnb3C_cddnqrdN0TgC-VzE_sTpaO3z2HdGJ8pIWYOtw93MehxLmS9S01ZmwqY4znLHW0Wo_1G6WJCtV4Eoc4LXvN1AH8PU",
    seats: 4,
    power: 715,
    transmission: "Automatic",
    type: "Coupe"
  }
];
