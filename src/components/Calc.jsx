import React, { useState } from "react";

const Calc = () => {
  const [kaina, setKaina] = useState("");

  const kainuBazė = {
    "MERCEDES-BENZ GLB": 50000,   
    "MERCEDES-BENZ GLE": 75000,    
    "MERCEDES-BENZ CLA": 40000,   
    "MERCEDES-BENZ E-CLASS": 70000,
    "MERCEDES-BENZ EQS": 120000,   
  };

  const metiniuNuvertejimoKoeficientas = 0.95;

  const skaiciuotiKaina = () => {
    const modelis = document.getElementById("modelis").value;
    const metai = parseInt(document.getElementById("metai").value);
    const dabartiniaiMetai = new Date().getFullYear();

    if (modelis && metai) {
      const pradineKaina = kainuBazė[modelis] || 0;
      const metuSkirtumas = dabartiniaiMetai - metai;
      const apskaiciuotaKaina = pradineKaina * Math.pow(metiniuNuvertejimoKoeficientas, metuSkirtumas);
      setKaina(`Apytikslė kaina: ${Math.round(apskaiciuotaKaina).toLocaleString()} €`);
    } else {
      setKaina("Pasirinkite modelį ir metus");
    }
  };

  return (
    <section className="bg-orange-300 py-5 px-6">
      <h1 className="text-center font-bold text-2xl mb-6">Skaičiuoklė</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div id="kainos_skaiciuokle">
            <select id="modelis" onChange={skaiciuotiKaina}>
              <option value="">Modelis</option>
              <option value="MERCEDES-BENZ GLB">Mercedes-Benz GLB</option> 
              <option value="MERCEDES-BENZ GLE">Mercedes-Benz GLE</option> 
              <option value="MERCEDES-BENZ E-CLASS">Mercedes-Benz E-Class</option>
              <option value="MERCEDES-BENZ EQS">Mercedes-Benz EQS</option> {/* Updated */}
            </select>
            <select id="metai" onChange={skaiciuotiKaina}>
              <option value="">Metai</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>&nbsp;&nbsp;&nbsp;
            <span id="kaina">{kaina}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calc;

