import { useEffect, useState } from "react";
import { dataTraining } from "../data/training";
import TrainingData from "../types/TrainingData";
import { HashLoader } from "react-spinners";

const ninja = require("../img/ninja.png");

export default function ListTraining() {
  const [training, setTraining] = useState<TrainingData[]>([]);
  const [loadingButton, setLoadingButton] = useState<boolean[]>([]);

  useEffect(() => {
    setTraining(dataTraining);
    relistTable();
  }, [training]);

  function relistTable() {
    dataTraining.sort((a, b) => {
      return a.status.localeCompare(b.status);
    });
  }

  const handleClick = (index: number) => {
    const newLoadingArray = [...loadingButton];
    const tempArray = [...training];

    newLoadingArray[index] = true;
    tempArray[index].status = Math.random() > 0.5 ? "Victoire" : "Défaite";
    setLoadingButton(newLoadingArray);
    setTimeout(() => {
      const updatedLoadingArray = [...loadingButton];
      updatedLoadingArray[index] = false;

      setLoadingButton(updatedLoadingArray);
    }, 1000);
    relistTable();
  };


  return (
    <div className="flex justify-evenly mt-5">
      <div>
        <img className="w-25 h-40" src={ninja} alt="ninja_picture" />
      </div>
      <div>
        <table>
          <caption>List Training</caption>
          <thead>
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          {training &&
            training.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td className="p-2 border">{item.title}</td>
                    <td className="p-2 border">{item.category}</td>
                    <td className="p-2 border">{item.status}</td>
                    <td className="p-2 border">
                      {item.status === "A commencer" ||
                      item.status === "Défaite" ? (
                        loadingButton[index] ? (
                          <HashLoader
                            className="m-2 p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold"
                            color="white"
                            size={30}
                          />
                        ) : (
                          <button
                            className="m-2 p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold"
                            onClick={() => handleClick(index)}
                          >
                            GO
                          </button>
                        )
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>

      <div>
        <img className="w-25 h-40" src={ninja} alt="ninja_picture" />
      </div>
    </div>
  );
}
