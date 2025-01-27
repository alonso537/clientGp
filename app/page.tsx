import React from "react";
import CardCom from "./_components/shared/CardCom";

const page = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5  min-h-screen">
      {/* pequeña lista de proyectos */}
      <CardCom
        span="col-span-12 md:col-span-3"
        rowSpan="row-span-12 md:row-span-6"
      />
      {/* numero de proyectos */}
      <CardCom
        span="col-span-4 md:col-span-3"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/* numero de colaboradores */}
      <CardCom
        span="col-span-4 md:col-span-3"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/* mi nombre */}
      <CardCom
        span="col-span-4 md:col-span-3"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/*  */}
      {/* grafica de actividades */}
      <CardCom
        span="col-span-12 md:col-span-3"
        rowSpan="row-span-12 md:row-span-6"
      />
      {/*  */}
      {/* graficas en circulo de proyectos y tareas  */}
      <CardCom
        span="col-span-12 md:col-span-6"
        rowSpan="row-span-12 md:row-span-6"
      />
      {/* listar tareas en prgreso */}
      <CardCom
        span="col-span-12 md:col-span-3"
        rowSpan="row-span-12 md:row-span-6"
      />

      {/*  */}
      {/* una barras de progreso */}
      <CardCom
        span="col-span-4 md:col-span-3"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/* messes que tienen tareas y proyectos */}
      <CardCom
        span="col-span-8 md:col-span-6"
        rowSpan="row-span-12 md:row-span-2"
      />

      {/*  */}
      {/* colaboradores destacados */}
      <CardCom
        span="col-span-12 md:col-span-3"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/* proyectos a los que pertenezco */}
      <CardCom
        span="col-span-4 md:col-span-2"
        rowSpan="row-span-12 md:row-span-2"
      />
      {/* proyectos proximos a vencer */}
      <CardCom
        span="col-span-4 md:col-span-4"
        rowSpan="row-span-12 md:row-span-2"
      />
    </div>
  );
};

export default page;
