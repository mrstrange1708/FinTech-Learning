import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Heart, Eye } from "lucide-react";

export default function FinTips() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const tips = [
    {
      title: "Empower Your Financial Knowledge…",
      description:
        "Are you looking to enhance your financial knowledge and improve your literacy in an engaging and interactive way?",
      image: "src/assets/fintip_1.avif",
    },
    {
      title: "Boost Your Financial Literacy with Practical Tips…",
      description:
        "Are you looking to enhance your financial literacy and make better informed decisions about your money?",
      image: "src/assets/fintip_2.avif",
    },
    {
      title: "Interactive and Fun Financial Education…",
      description:
        "Financial education is a crucial aspect of our lives that often gets overlooked. Understanding money management is key.",
      image: "src/assets/fintip_3.avif",
    },
  ];

  return (
    <div id="FinTip" className="p-8 bg-black min-h-screen text-white mb-0">
      <h1 className="text-5xl font-bold mb-10">Fin Tips</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-0">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <img
              src={tip.image}
              alt="Fin Tip"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">{tip.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3">{tip.description}</p>
            </div>
            <div className="flex items-center justify-between px-4 pb-4">
              <div className="flex items-center text-gray-400 text-sm">
                <Eye size={16} className="mr-1" /> 10M
              </div>
              <Heart size={18} className="text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}