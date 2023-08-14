import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";
import { useStatus } from "../context/statusContext";

Chart.register(CategoryScale, LinearScale, BarElement);

export const BarChart = () => {
  const { statusReady, statusProgress, statusTesting, statusDone } =
    useStatus();
  return (
    <>
      <h1 className="text-2xl font-bold my-[30px] underline">
        Task Metrics based on Task Status
      </h1>
      <div>
        <Bar
          data={{
            labels: ["Ready", "In Progress", "Testing", "Done"],
            datasets: [
              {
                label: "Total Tasks",
                data: [
                  statusReady?.length,
                  statusProgress?.length,
                  statusTesting?.length,
                  statusDone?.length,
                ],
                backgroundColor: "rgba(54, 162, 235, 0.3)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
              {
                label: "High",
                data: [
                  statusReady?.reduce(
                    (acc, curr) => (curr.priority === "High" ? acc + 1 : acc),
                    0
                  ),
                  statusProgress?.reduce(
                    (acc, curr) => (curr.priority === "High" ? acc + 1 : acc),
                    0
                  ),
                  statusTesting?.reduce(
                    (acc, curr) => (curr.priority === "High" ? acc + 1 : acc),
                    0
                  ),
                  statusDone?.reduce(
                    (acc, curr) => (curr.priority === "High" ? acc + 1 : acc),
                    0
                  ),
                ],
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 0, 0, 1)",
                borderWidth: 1,
              },
              {
                label: "Medium",
                data: [
                  statusReady?.reduce(
                    (acc, curr) => (curr.priority === "Medium" ? acc + 1 : acc),
                    0
                  ),
                  statusProgress?.reduce(
                    (acc, curr) => (curr.priority === "Medium" ? acc + 1 : acc),
                    0
                  ),
                  statusTesting?.reduce(
                    (acc, curr) => (curr.priority === "Medium" ? acc + 1 : acc),
                    0
                  ),
                  statusDone?.reduce(
                    (acc, curr) => (curr.priority === "Medium" ? acc + 1 : acc),
                    0
                  ),
                ],
                backgroundColor: "rgba(255, 159, 64, 0.3)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
              },
              {
                label: "Low",
                data: [
                  statusReady?.reduce(
                    (acc, curr) => (curr.priority === "Low" ? acc + 1 : acc),
                    0
                  ),
                  statusProgress?.reduce(
                    (acc, curr) => (curr.priority === "Low" ? acc + 1 : acc),
                    0
                  ),
                  statusTesting?.reduce(
                    (acc, curr) => (curr.priority === "Low" ? acc + 1 : acc),
                    0
                  ),
                  statusDone?.reduce(
                    (acc, curr) => (curr.priority === "Low" ? acc + 1 : acc),
                    0
                  ),
                ],
                backgroundColor: "rgba(75, 192, 192, 0.3)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </>
  );
};
