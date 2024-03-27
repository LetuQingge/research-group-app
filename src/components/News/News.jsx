import React from "react";
import "./News.scss";

const news = [
  `Our paper titled "Parallel Trajectory Training of Recurrent Neural Network Controllers with Levenberg-Marquardt 
    and Forward Accumulation Through Time in Closed-loop Control Systems" was published by the IEEE Transactions on 
    Sustainable Computing, 2023. IF: 3.9.`,
  `Our paper titled "Machine Learning Models for Phenotype Prediction from Genotype" was accepted by the 23rd IEEE 
    International Conference on Bioinformatics and Bioengineering (BIBE) 2023.`,
  `Our paper titled "Accelerating FPGA Implementation of Neural Network Controllers via 32-bit Fixed-Point Design for 
Real-Time Control" was  accepted by the IEEE UEMCON 2023, New York. This paper was awarded the BEST PAPER at IEEE UEMCON 2023.`,
  `Our paper titled "A Convolutional Denoising Autoencoder for Protein Scaffold Filling" was accepted by the 19th International 
Symposium on Bioinformatics Research and Applications (ISBRA 2023), Wroclaw, Poland, August 2023.`,
  `Our paper titled "A Novel Weight Dropout Approach to Accelerate the Neural Network Controller Embedded Implementation on FPGA
 for a Solar Inverter " was recently published at IEEE SMARTCOMP 2023, Nashville, TN.`,
  `Our paper titled "PMT-IQA: Progressive Multi-task Learning for Blind Image Quality Assessment" was accepted by the 20th Pacific 
Rim International Conference on Artificial Intelligence (PRICAI), Jakarta, Indonesia, August 2023.`,
  `Justin Noland successfully defended his Master thesis in June, 2023.`,
  `Jordan Sturtz successfully defended his Master thesis in May, 2023.`,
];

const News = () => {
  return (
    <div className="news-main">
      <div className="news-main__title">News</div>
      <ul>
        {news.map((item, i) => (
          <li
            key={i}
            style={{
              paddingBottom: "1rem",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
