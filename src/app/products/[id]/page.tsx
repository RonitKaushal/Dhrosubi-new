"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/app/components/products/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

/* ---------------- TYPES ---------------- */

type ProductColor = {
  name: string;
  hex: string;
  image?: string;
};
type Size = {
  size: string;
  image?: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  additionalImages: string[];
  colors: ProductColor[];
  size: Size[];
  gsm: (string | number)[];
  additionalInfo: {
    material: string;
    useFor: string[];
    minOrderQuantity: {
      india: string;
      otherCountries: string;
    };
    priceRange: string;
  };
};

/* ---------------- PAGE ---------------- */

export default function ProductDetailPage() {
  const { id } = useParams();
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  ) as Product | undefined;

  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedGSM, setSelectedGSM] = useState<string | null>(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  /* ---------------- DEFAULT IMAGE ---------------- */

  useEffect(() => {
    if (!product) return;

    // Default to main image
    setSelectedImage(product.mainImage);

    // Auto-select first color with image (optional UX boost)
    const firstColorWithImage = product.colors.find((c) => c.image);
    if (firstColorWithImage) {
      setSelectedColor(firstColorWithImage);
      setSelectedImage(firstColorWithImage.image);
    }
  }, [product]);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  /* ---------------- WHATSAPP ---------------- */

  const handleSendInquiry = () => {
    if (!selectedColor || !selectedSize || !selectedGSM) {
      alert("Please select Color, Size, and GSM before proceeding.");
      return;
    }

    if (!customerName || !customerPhone) {
      alert("Please enter your Name and Phone number.");
      return;
    }

    const whatsappNumber = "919173144109";

    const message = `
Hello,
My name is ${customerName}, and I’m interested in your ${product.title}.

Product Details:
• Product: ${product.title}
• Color: ${selectedColor.name}
• Size: ${selectedSize}
• GSM: ${selectedGSM}
• Material: ${product.additionalInfo.material}
• Use For: ${product.additionalInfo.useFor.join(" & ")}
• MOQ: ${product.additionalInfo.minOrderQuantity.india} (India), ${product.additionalInfo.minOrderQuantity.otherCountries} (Other)

Customer Details:
• Name: ${customerName}
• Phone: ${customerPhone}

Please share pricing, customization options, and delivery timelines.

Regards,
${customerName}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="max-w-[1200px] flex flex-col md:flex-row w-[95%] mx-auto gap-5 py-6 mt-20">
      {/* LEFT – IMAGES */}
      <div className="flex flex-col justify-center items-center w-full h-auto md:w-1/2 md:h-1/2">
        <div className="relative w-full md:w-[500px] h-[500px] md:h-[500px]">
          <Image
            src={selectedImage || product.mainImage}
            alt={product.title}
            fill
            className="object-cover rounded-lg border-2 border-black"
          />
        </div>

        {/* <div className="flex flex-wrap justify-center gap-3 mt-3">
          {[product.mainImage, ...product.additionalImages].map((img, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 md:w-28 md:h-28 rounded-xl cursor-pointer overflow-hidden ${
                selectedImage === img ? "border-4 border-black" : "border-2 border-black"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`${product.title}-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* RIGHT – DETAILS */}
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>

        {/* COLORS */}
        <div className="mt-4">
          <h2 className="font-semibold">Colors:</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedColor(color);
                  setSelectedImage(color.image || product.mainImage);
                }}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition ${
                  selectedColor?.name === color.name
                    ? "bg-light-green border-green-600"
                    : "border-black"
                }`}
              >
                <div
                  className="w-5 h-5 rounded-full border border-black"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SIZES */}
        <div className="mt-4">
          <h2 className="font-semibold">Sizes:</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            {product.size.map((sizeObj, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedSize(sizeObj.size);
                  setSelectedImage(sizeObj.image || product.mainImage);
                }}
                className={`px-3 py-1 rounded-full border ${
                  selectedSize === sizeObj.size
                    ? "bg-light-green border-green-600"
                    : "border-black"
                }`}
              >
                {sizeObj.size}
              </button>
            ))}
          </div>
        </div>

        {/* GSM */}
        <div className="mt-4">
          <h2 className="font-semibold">GSM:</h2>
          <div className="flex gap-2 mt-2">
            {product.gsm.map((gsm, i) => (
              <button
                key={i}
                onClick={() => setSelectedGSM(String(gsm))}
                className={`px-3 py-1 rounded-full border ${
                  selectedGSM === String(gsm)
                    ? "bg-light-green border-green-600"
                    : "border-black"
                }`}
              >
                {gsm}
              </button>
            ))}
          </div>
        </div>

        {/* ADDITIONAL DETAILS */}
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-bold mb-3">Additional Details</h2>
          <p><strong>Material:</strong> {product.additionalInfo.material}</p>
          <p><strong>Use For:</strong> {product.additionalInfo.useFor.join(", ")}</p>
          <p>
            <strong>MOQ:</strong> {product.additionalInfo.minOrderQuantity.india} (India),{" "}
            {product.additionalInfo.minOrderQuantity.otherCountries} (Other)
          </p>
        </div>

        {/* INQUIRY */}
        <button
          onClick={() => setOpenDialog(true)}
          className="mt-6 bg-light-green border-2 border-black py-3 rounded-lg font-bold uppercase"
        >
          Send Inquiry
        </button>

        {/* DIALOG */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter Your Details</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Full Name</Label>
                <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
              </div>
            </div>

            <DialogFooter>
              <Button onClick={handleSendInquiry} className="w-full">
                Send via WhatsApp
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
