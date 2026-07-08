// src/data/products.ts
// Single source of truth for Trudanaz products.
// Data transcribed directly from the client's carton artwork — DO NOT invent or alter
// composition, license numbers, or manufacturer text. Add new products by appending here.

export type ProductCategory = "Pharmaceutical" | "Nutraceutical";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;          // short one-liner for cards
  composition: string;      // full composition line from the label
  ingredients?: string;     // for nutraceuticals — ingredient breakdown
  nutritionalInfo?: string; // for nutraceuticals with nutritional panel
  packSize: string;
  dosageForm: string;
  storage: string;
  colour?: string;          // excipient colour note if printed on label
  dosage?: string;          // dosage instructions from label
  manufacturedBy: string;
  marketedBy: string;
  licenseNo: string;        // "" if not printed on label
  caution: string;          // Rx / schedule / not-for-medicinal-use note
  image: string;            // path under /public
  coverImage?: string;      // full carton artwork
}

export const CATEGORIES: ProductCategory[] = ["Pharmaceutical", "Nutraceutical"];

export const products: Product[] = [
  {
    slug: "livdanaz-300",
    name: "Livdanaz-300",
    category: "Pharmaceutical",
    tagline: "Ursodeoxycholic Acid Tablets I.P. 300 mg — liver health support.",
    composition:
      "Each film coated tablet contains: Ursodeoxycholic Acid I.P. 300 mg, Excipients q.s.",
    colour: "Red Oxide of Iron",
    dosage: "As directed by the Physician.",
    storage: "Store in a cool, dry & dark place. Protect from light. Keep the medicine out of the reach of children.",
    packSize: "10 x 10 Tablets",
    dosageForm: "Tablet",
    manufacturedBy:
      "Bajaj Formulations (A WHO-GMP & ISO 9001:2015 Certified Co.), Khasra No. 161, Village-Lakeshwary, Bhagwanpur, Roorkee, Distt. Haridwar (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "Mfg. Lic. No. 89/UA/SC/P-2016 & 90/UA/2016",
    caution:
      "Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    image: "/products/livdanaz-300.jpeg",
  },
  {
    slug: "trupraz-d",
    name: "Trupraz-D",
    category: "Pharmaceutical",
    tagline: "Enteric Coated Esomeprazole & Domperidone (SR) Capsules.",
    composition:
      "Each hard gelatin capsule contains: Esomeprazole Magnesium I.P. eq. to Esomeprazole 40 mg (as enteric coated pellets), Domperidone I.P. 30 mg (as sustained release pellets), Excipients q.s.",
    dosage: "As directed by the Physician.",
    storage: "Store in a cool, dry & dark place. Protect from light. Keep the medicine out of the reach of children.",
    packSize: "10 x 10 Capsules",
    dosageForm: "Enteric Coated / Sustained Release Capsule",
    manufacturedBy:
      "Bajaj Formulations (A WHO-GMP & ISO 9001:2015 Certified Co.), Khasra No. 161, Village-Lakeshwary, Bhagwanpur, Roorkee, Distt. Haridwar (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "Mfg. Lic. No. 89/UA/SC/P-2016 & 90/UA/2016",
    caution:
      "Schedule H Prescription Drug — not to be sold by retail without the prescription of a Registered Medical Practitioner. This drug may cause Acute Kidney Injury as an adverse drug reaction.",
    image: "/products/trupraz-d.jpeg",
  },
  {
    slug: "trudanfer",
    name: "Trudanfer",
    category: "Nutraceutical",
    tagline: "Ferric Pyrophosphate, Vitamins C, Folic Acid & Vitamin B12 Tablets.",
    composition:
      "Each film coated tablet contains: Ferric Pyrophosphate 29 mg (eq. to elemental Iron), Vitamin C 50 mg, Folic Acid 300 mcg, Vitamin B12 0.75 mcg.",
    ingredients:
      "Ferric Pyrophosphate, Ascorbic Acid, Folic Acid, Cyanocobalamin, Microcrystalline Cellulose [INS 460(i)], Sodium Starch Glycolate [INS 468], Povidone [INS 1201], Propyl Paraben [INS 216], Colloidal Silicon Dioxide [INS 551], Hydroxyl Propyl Methyl Cellulose [INS 464], Synthetic Food Color [Ins 11 & INS 172 (iii)].",
    nutritionalInfo:
      "Serving Size: 1 Tablet | Energy: 0.624 Kcal | Protein: 0.10 gm | Carbohydrate: 0.096 gm | Sugar: 0.00 gm | Fat & Fatty Acid: 0.00 gm | Cholesterol: 0.00 mg | Sodium: 1.00 mg | Ferric Pyrophosphate: 29 mg (100% RDA) | Vitamin C: 50 mg | Folic Acid: 300 mcg (80.21% RDA) | Vitamin B12: 0.75 mcg (34.09% RDA)",
    storage: "Store in a cool, dry & dark place at a temperature not exceeding 25°C.",
    packSize: "10 x 1 x 15 Tablets",
    dosageForm: "Tablet",
    manufacturedBy:
      "Bajaj Nutraceuticals (An ISO 9001:2015 FSMS, GMP & HACCP Certified Org.), 328 M, Raipur Industrial Area, Bhagwanpur, Roorkee, Distt. Haridwar-247661 (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "FSSAI Lic. No. 10017012000396",
    caution:
      "Not for medicinal use. This product is not intended to diagnose, treat, cure, or prevent any disease. To be stored out of reach of children. Recommended Usage: As directed by health practitioner. Not to exceed the recommended daily usage. This product is not to be used as a substitute for a varied diet.",
    image: "/products/trudanfer.jpeg",
  },
  {
    slug: "trudavit",
    name: "Trudavit",
    category: "Nutraceutical",
    tagline:
      "Lycopene, Betacarotene, Inositol, Multivitamin & Multimineral Softgel Capsules.",
    composition:
      "Each soft gelatin capsule contains: Lycopene USP 5000 mcg, Betacarotene 10% USP 30 mg, Benfotiamine 10 mg, Inositol IP 10 mg, Vitamin B12 IP 5 mcg, Vitamin B6 IP 3 mg, Vitamin D3 IP 500 IU, Sodium Selenite Pentahydrate BP 75 mcg, Chromium Picolinate 100 mcg, Zinc Sulphate Monohydrate IP 15 mg, Manganese Sulphate IP 1.4 mg, Folic Acid IP 1.5 mg, Niacinamide IP 50 mg.",
    storage: "Store in a cool, dry & dark place. Protect from light. Keep the medicine out of the reach of children.",
    packSize: "10 x 1 x 15 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    manufacturedBy:
      "Bajaj Nutraceuticals (An ISO 9001:2015 GMP, GLP & WHO Certified Org.), 328 M, Raipur Industrial Area, Bhagwanpur, Roorkee, Distt. Haridwar-247661 (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "",
    caution:
      "Not for medicinal use. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    image: "/products/trudavit.jpeg",
  },
  {
    slug: "trunefdan",
    name: "Trunefdan",
    category: "Nutraceutical",
    tagline: "Taurine, N-Acetyl-L-Cysteine & Vitamin B6 Tablets.",
    composition:
      "Each film coated tablet contains: L-Taurine 500 mg, N-Acetyl-L-Cysteine 300 mg, Vitamin B6 1.9 mg.",
    storage: "Store in a cool, dry & dark place at a temperature not exceeding 25°C.",
    packSize: "10 x 10 Tablets",
    dosageForm: "Tablet",
    manufacturedBy:
      "Bajaj Nutraceuticals (An ISO 9001:2015 FSMS, GMP & HACCP Certified Org.), 328 M, Raipur Industrial Area, Bhagwanpur, Roorkee, Distt. Haridwar-247661 (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "FSSAI Lic. No. 10017012000396",
    caution:
      "Not for medicinal use. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    image: "/products/trunefdan.jpeg",
  },
  {
    slug: "trudancal",
    name: "Trudancal",
    category: "Nutraceutical",
    tagline:
      "Calcium Citrate, Magnesium, Zinc & Vitamin D3 Tablets — strong bones, joint health, mobility & daily strength.",
    composition:
      "Each film coated tablet contains: Calcium Citrate 1000 mg, Magnesium 100 mg, Zinc Sulphate Monohydrate 22.50 mg, Vitamin D3 600 IU.",
    ingredients:
      "Calcium Citrate, Magnesium, Zinc Sulphate Monohydrate, Cholecalciferol, Microcrystalline Cellulose [INS 460(i)], Starch [INS 1400], Polyvinylpyrrolidone [INS 1201], Polyethylene Glycol [INS 1521], Hydroxyl Propyl Methyl Cellulose [INS 464], Talc [INS 553(iii)], Magnesium Stearate [INS 470(ii)], TiO2 [INS 171], Cholesterol [INS 554].",
    nutritionalInfo:
      "Serving Size: 1 Tablet | Energy: 2.320 Kcal (0.12% RDA) | Protein: 0.10 gm (0.18% RDA) | Carbohydrate: 0.48 gm | Sugar: 0.00 gm | Fat & Fatty Acid: 0.00 gm | Cholesterol: 0.00 mg | Sodium: 1.00 mg (0.05% RDA) | Calcium Citrate: 1000 mg (0.08% RDA) | Magnesium: 100 mg (22.73% RDA) | Zinc Sulphate Monohydrate: 22.50 mg (48.22% RDA) | Vitamin D3: 600 IU (100% RDA)",
    storage: "Store in a cool, dry & dark place at a temperature not exceeding 25°C.",
    packSize: "10 x 1 x 15 Tablets",
    dosageForm: "Tablet",
    manufacturedBy:
      "Bajaj Nutraceuticals (An ISO 9001:2015 FSMS, GMP Certified Org.), 328 M, Raipur Industrial Area, Bhagwanpur, Roorkee, Distt. Haridwar-247661 (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "FSSAI Lic. No. 10017012000396",
    caution:
      "Not for medicinal use. This product is not intended to diagnose, treat, cure, or prevent any disease. Recommended Usage: As directed by health practitioner. Not to exceed the recommended daily usage. This product is not to be used as a substitute for a varied diet. NOT FOR MEDICINAL USE.",
    image: "/products/trudancal.jpeg",
  },
  {
    slug: "trucefdan-cv-500",
    name: "Trucefdan-CV 500",
    category: "Pharmaceutical",
    tagline: "Cefuroxime Axetil & Potassium Clavulanate Tablets IP.",
    composition:
      "Each film coated tablet contains: Cefuroxime Axetil I.P. eq. to Anhydrous Cefuroxime 500 mg, Potassium Clavulanate Diluted I.P. eq. to Clavulanic Acid 125 mg, Excipients q.s.",
    colour: "Titanium Dioxide I.P.",
    dosage: "As directed by the Physician.",
    storage: "Store in a dry place below 25°C. Protect from light. Keep the medicine out of the reach of children. Tablet to be consumed whole, not to be broken.",
    packSize: "10 x 10 Tablets (Alu-Alu)",
    dosageForm: "Tablet",
    manufacturedBy:
      "Bajaj Formulations (A WHO-GMP & ISO 9001:2015 Certified Co.), Khasra No. 161, Village-Lakeshwary, Bhagwanpur, Roorkee, Distt. Haridwar (U.K.)",
    marketedBy:
      "Trudanaz Pharmaceuticals Private Limited, A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra- 400065",
    licenseNo: "Mfg. Lic. No. 89/UA/SC/P-2016 & 90/UA/2016",
    caution:
      "Not to be sold by retail without the prescription of a Registered Medical Practitioner. Tablet to be consumed whole, not to be broken.",
    image: "/products/trucefdan-cv-500.webp",
  },
];

// Company-level details (edit in one place)
export const company = {
  name: "Trudanaz Pharmaceuticals Pvt. Ltd.",
  tagline: "Dedicated to better living",
  address:
    "A321, Suite no. 874, Master Mind 4, Royal Palms, Goregaon (East), Mumbai, Maharashtra - 400065",
  // TODO: fill these in before launch
  gstin: "GSTIN_HERE",
  cin: "CIN_HERE",
  phone: "+91 00000 00000",
  whatsapp: "9100000000000", // digits only, with country code, e.g. 919876543210
  email: "enquiries@trudanaz.com",
};

export const manufacturers = [
  {
    name: "Bajaj Formulations",
    address:
      "Khasra No. 161, Village-Lakeshwary, Bhagwanpur, Roorkee, Distt. Haridwar (U.K.)",
    certs: "WHO-GMP & ISO 9001:2015 Certified",
    license: "Mfg. Lic. No. 89/UA/SC/P-2016 & 90/UA/2016",
    makes: "Livdanaz-300, Trupraz-D, Trucefdan-CV 500",
  },
  {
    name: "Bajaj Nutraceuticals",
    address:
      "328 M, Raipur Industrial Area, Bhagwanpur, Roorkee, Distt. Haridwar-247661 (U.K.)",
    certs: "ISO 9001:2015 FSMS, GMP & HACCP Certified",
    license: "FSSAI Lic. No. 10017012000396",
    makes: "Trudanfer, Trudavit, Trunefdan, Trudancal",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (cat: ProductCategory) =>
  products.filter((p) => p.category === cat);

export const whatsappLink = (message?: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message ?? "Hi, I would like to know more about Trudanaz products."
  )}`;
