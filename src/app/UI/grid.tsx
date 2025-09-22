"use client";

import Image from "next/image";

const Portfolio = () => {
 

 
  

  return (
    <>
     
        <div className="container mx-auto">
          
          
          <div className="flex flex-wrap -mx-4">
           
            <PortfolioCard
              ImageHref="/Aptech2.JPG"
             
              title="Advance Diploma in Software Engineering"
              
            />
           
            <PortfolioCard
              ImageHref="/MyDecagon.JPG"
              
              title="Software Engineering and Leadership Training Program"
             
            />
            <PortfolioCard
              ImageHref="/Aptech1.JPG"
             
              title="Proficiency in System Management"
             
            />
           
          </div>
        </div>
    
    </>
  );
};

export default Portfolio;

interface PortfolioCardProps {
 
  
  ImageHref: string;
  title: string;

}

const PortfolioCard = ({
 
  
  ImageHref,
  title,
 
}: PortfolioCardProps) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 mb-8 mt-16`}
      
    >
      <div className="relative mb-12">
        <Image src={ImageHref} alt="portfolio" className="w-full" width={600} height={400} />
      </div>
      <div className="relative z-10 mx-7 -mt-28 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
       
        <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
       
      </div>
    </div>
  );
};
