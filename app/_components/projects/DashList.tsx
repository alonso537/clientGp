import React from "react";

const DashList = () => {
  return (
    <div className=" overflow-y-auto  overflow-hidden">
      <table className="min-w-full  border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-sky-800 border-b border-gray-200 rounded-lg">
            <th className="py-1 px-4 text-left text-white">Proyectos</th>
            <th className="py-1 px-4 text-left text-white">Fecha Límite</th>
            <th className="py-1 px-4 text-left text-white">Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-2 px-4">Nombre proyecto {index + 1}</td>
              <td className="py-2 px-4">Fecha límite</td>
              <td className="py-2 px-4">Prioridad</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashList;
