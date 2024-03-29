import React from "react";
import PageTitle from "./PageTitle";

const Footer = () => {
  return (
    <div className="bg-slate-200 w-full h-[25vh] flex flex-col gap-10 p-4">
      <PageTitle title="Tentang Kami" className="text-center" />
      <table className="table-auto">
        <tbody>
          <tr className="">
            <td className="w-28 flex">Alamat</td>
            <td>
              Jalan Raya Limpung - Bawang No.KM, RW No.8, Mrica, Bawang,
              Kab.Banjarnegara, Jawa Tengah 5347 (Depan pintu keluar RSI
              Banjarnegara)
            </td>
          </tr>
          <tr className="">
            <td>WA</td>
            <td>+6283114709518 / +6283874809638</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
