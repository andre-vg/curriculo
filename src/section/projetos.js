import React from "react";
import starbucks from "../static/starbuckslogin.png";
import logo from "../static/logoroxoclaro.jpg";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const dataDesafio = [
  {
    name: "JavaScript",
    usage: 30732,
  },
  {
    name: "CSS",
    usage: 3134,
  },
  {
    name: "HTML",
    usage: 1721,
  },
];

const dataStarbucks = [
  {
    name: "HTML",
    usage: 30871,
  },
  {
    name: "CSS",
    usage: 21506,
  },
  {
    name: "Python",
    usage: 11386,
  },
  {
    name: "JavaScript",
    usage: 939,
  },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

function Projetos() {
  return (
    <div className="Projetos">
      <section id="projetos" class="projetos">
        <div class="container">
          <div class="section-title">
            <h2>Projetos</h2>
            <p>
              Alguns projetos que fiz para testagem de conhecimentos e trabalhos
              de disciplina.
            </p>
          </div>
          <div class="row">
            <div class="col-sm-2 col-md-4">
              <h3 class="portfolio-projects--title">Starbucks</h3>
              <h5 class="portfolio-projects--desc">
                Software de caixa registradora
              </h5>
            </div>
            <div class="col-sm-2 col-md-4 text-center">
              <div class="polaroid">
                <a href="https://github.com/andre-vg/CAIXA_ANDRE">
                  <img
                    class="portfolio-projects--image"
                    src={starbucks}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="col-sm-2 col-md-4" id="chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={500}>
                  <Pie
                    data={dataStarbucks}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="usage"
                  >
                    {dataStarbucks.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-sm-2 col-md-4">
              <h3 class="portfolio-projects--title">Currículo</h3>
              <h5 class="portfolio-projects--desc">Projeto do Curriculo Web</h5>
            </div>
            <div class="col-sm-2 col-md-4 text-center">
              <div class="polaroid">
                <a href="https://github.com/andre-vg/NetbeansCurriculo">
                  <img class="portfolio-projects--image" src={logo} alt="" />
                </a>
              </div>
            </div>
            <div class="col-sm-2 col-md-4" id="chart2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={500}>
                  <Pie
                    data={dataDesafio}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="usage"
                  >
                    {dataDesafio.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projetos;
