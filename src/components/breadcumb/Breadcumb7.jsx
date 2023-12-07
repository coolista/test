"use client";
import { useState } from "react";
import HeroSearch1 from "../element/HeroSearch1";
import Image from "next/image";
import { useRouter } from "next/navigation";

const role = [
  "Choose Category",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

export default function Breadcumb7() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // choose a category
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/service-6");
  };
  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-v6 cta-banner mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative d-flex align-items-center">
          <Image
            height={300}
            width={400}
            className="service-v3-vector d-none d-lg-block"
            src="/images/about/about-4.png"
            alt="about"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2 className="text-white">Dream &amp; Interpreter</h2>
                  <p className="text mb30 text-white">
                    Give your visitor a smooth online experience with a solid UX
                    design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
