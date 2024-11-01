import React from "react";

const ListingDetailPage = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 pb-10">
      {/* Title  */}
      <h4 className="text-3xl font-semibold">Haunt the Beetlejuice house</h4>
      {/* Image Grid  */}
      <div className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden">
        <div className="h-[560px] bg-slate-300"></div>
        <div className="h-[560px] grid grid-cols-2 gap-4">
          <div className="h-[272px] bg-slate-400"></div>
          <div className="h-[272px] bg-slate-500"></div>
          <div className="h-[272px] bg-slate-600"></div>
          <div className="h-[272px] bg-slate-700"></div>
        </div>
      </div>
      {/* content Area  */}
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 flex flex-col gap-6">
          {/* location section  */}
          <div>
            <h6 className="text-xl font-semibold">
              Hillsborough Township, New jersy
            </h6>
            <p>Evening Experirence</p>
          </div>
          {/* author section  */}
          <div className="py-6 border-t border-b flex items-center gap-4">
            <div className="size-10 rounded-full bg-slate-400"></div>
            <div>
              <h6 className="text-lg font-medium">Hosted by Delia Deetz</h6>
              <p className="text-sm">Evening Experirence</p>
            </div>
          </div>
          {/* Feature list  */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="size-1 rounded-full bg-slate-400"></div>
              <div>
                <h6 className="text-lg font-medium">Hosted by Delia Deetz</h6>
                <p className="text-sm">Evening Experirence</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
