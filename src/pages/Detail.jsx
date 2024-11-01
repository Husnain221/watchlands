import React from "react";
import MapSection from "../components/MapSection";

const fearture = [1, 2, 3, 4];
const detail = [1, 2, 3, 4];
const authorList = [1, 2, 3, 4];
const ListingDetailPage = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 pb-10">
      {/* Title  */}
      <h4 className="text-3xl font-semibold">Haunt the Beetlejuice house</h4>
      {/* Image Grid  */}
      <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden">
        <div className="h-[560px] bg-slate-300"></div>
        <div className="h-[560px] grid grid-cols-2 gap-4">
          <div className="h-[272px] bg-slate-400"></div>
          <div className="h-[272px] bg-slate-500"></div>
          <div className="h-[272px] bg-slate-600"></div>
          <div className="h-[272px] bg-slate-700"></div>
        </div>
      </div>
      {/* content Area  */}
      <div className="grid grid-cols-12 gap-20  border-b pb-10 relative">
        {/* LeftSite Content  */}
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
            {fearture &&
              fearture.map((index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="size-8 rounded-full bg-slate-400"></div>
                  <div>
                    <h6 className="text-lg font-medium">
                      Take in my extraordinary home
                    </h6>
                    <p className="text-sm">
                      It’s art incarnate—ever since I restored it. Even the
                      molding is heavenly.
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/* detail section  */}
          <div className=" border-t py-6 flex flex-col gap-4 pb-10 border-b">
            {detail &&
              detail.map((index) => (
                <p key={index} className="text-sm">
                  Now that my art is posthumously appreciating in value and
                  recognition—rightfully so, I might add—I hereby invite to my
                  home any artistic soul that wishes to make the pilgrimage.
                  Although shrouded in black to mourn Charles’ passing, the
                  interior is unparalleled, curated by none other than yours
                  truly, rescued from the pedestrian eye of its previous owners.
                  And, in return for your undying support, I will teach you to
                  Create with a capital C in the first-ever art class from
                  beyond the grave.
                </p>
              ))}
          </div>

          {/* Author Detail  */}
          <div className="py-6 flex flex-col gap-6">
            <h6 className="text-xl font-medium">Meet your Host</h6>
            <div className="p-5 rounded-2xl shadow-lg flex flex-col gap-3 justify-center items-center w-[300px] border">
              <div className="size-16 bg-slate-300 rounded-full"></div>
              <div>
                <h6 className="text-2xl font-semibold">Delia Deetz</h6>
                <p className="text-xs">Started hosting in 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {authorList &&
                authorList.map((index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="size-6 rounded-full bg-slate-400"></div>
                    <p className="text-sm">
                      It’s art incarnate—ever since I restored it. Even the
                      molding is heavenly.
                    </p>
                  </div>
                ))}
            </div>
            <div>
              <p className="text-sm">
                Now that my art is posthumously appreciating in value and
                recognition—rightfully so, I might add—I hereby invite to my
                home any artistic soul that wishes to make the pilgrimage.
                Although shrouded in black to mourn Charles’ passing, the
                interior is unparalleled, curated by none other than yours
                truly, rescued from the pedestrian eye of its previous owners.
                And, in return for your undying support, I will teach you to
                Create with a capital C in the first-ever art class from beyond
                the grave.
              </p>
            </div>
          </div>
        </div>
        {/* Right Content  */}
        <div className="col-span-4 relative">
          <div className="sticky top-20 right-0 p-5 border rounded-2xl shadow-lg flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-1 text-center">
              <h6 className="text-xl ">
                <span className="font-semibold">$0</span> per guest
              </h6>
              <p className="text-sm">Closes November 5, 12:59 PM</p>
            </div>
            <div className="w-full">
              <button className="text-lg bg-blue-500 text-white w-full py-4 px-8 rounded-lg">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col gap-8 border-b">
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-medium">Meet your Host</h6>
          <p className="text-sm">
            Hillsborough Township, New Jersey, United States
          </p>
        </div>
        <MapSection />
        <p className="text-sm">
          We verified that this listing’s location is accurate. Learn more
        </p>
      </div>
    </div>
  );
};

export default ListingDetailPage;
