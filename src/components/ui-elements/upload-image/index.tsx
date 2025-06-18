import { useState } from "react";
import { PiMountainsThin } from "react-icons/pi";

export default function ImageUploadSection() {
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  return (
    <div>
      <h2 className="mb-4 font-semibold">Tashkilot haqida rasmlar</h2>
      <div className="flex flex-wrap gap-4">
        {images.map((img, idx) => {
          let flexClass = "";
          if (idx === 0) flexClass = "flex-[1_0_140px]";
          if (idx === 1) flexClass = "flex-[1_0_100px]";
          if (idx === 2) flexClass = "flex-[1_0_80px]";

          return (
            <label key={idx} className={`cursor-pointer ${flexClass}`}>
              <div className=" h-52 border border-[#6495ED] rounded-lg flex items-center justify-center overflow-hidden">
                {img ? (
                  <img
                    src={img}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#6495ED] text-2xl">
                    <PiMountainsThin />
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, idx)}
                className="hidden"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
