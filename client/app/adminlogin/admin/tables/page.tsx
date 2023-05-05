"use client";

import CardTable from "../../../../components/Cards/CardRutas";
import TableDropdown from "../../../../components/Dropdowns/TableDropdown";

export default function Table() {
  return (
    <>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <CardTable />
        </div>
        <div className="mb-12 w-full px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
