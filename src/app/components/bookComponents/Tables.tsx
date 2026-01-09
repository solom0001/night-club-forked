import Image from "next/image";
import Link from "next/link";

type TablesProps = {
  reservations: any[];
  selectedTable: string;
  setSelectedTable: (selectedTable: string) => void;
};

function Tables({
  reservations,
  selectedTable,
  setSelectedTable,
}: TablesProps) {
  console.log("Current reservations:", reservations);

  return (
    <div className="py-[30px] sm:py-[90px] grid grid-cols-5 gap-y-12">
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 1) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>1</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("1")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              1
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 2) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>2</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("2")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              2
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 3) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>3</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("3")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              3
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2]  items-center [&>*]:row-[1/2]">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 4) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>4</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("4")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              4
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 5) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>5</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("5")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              5
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 6) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>6</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("6")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              6
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 7) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>7</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("7")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              7
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 8) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>8</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("8")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              8
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 9) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>9</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("9")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              9
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 10) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>10</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("10")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              10
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 11) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>11</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("11")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              11
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 12) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>12</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("12")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              12
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 13) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>13</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("13")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              13
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 14) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>14</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("14")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              14
            </h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        {reservations.some((r) => Number(r.table) === 15) ? (
          <h1 className={`w-fit h-fit mx-auto text-(--red)`}>15</h1>
        ) : (
          <Link href="#form">
            <h1
              onClick={() => setSelectedTable("15")}
              className="w-fit h-fit mx-auto hover:text-green-400 transition-all duration-200 ease-in"
            >
              15
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Tables;
