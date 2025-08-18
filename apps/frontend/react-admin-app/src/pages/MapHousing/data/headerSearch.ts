export const typeOptions: Record<
  string,
  { title: string; options: { label: string; value: string }[] }[]
> = {
  price: [
    {
      title: t("map.price"),
      options: [
        { label: t("map.priceUnder80"), value: "80" },
        { label: t("map.price80To100"), value: "80-100" },
        { label: t("map.price100To150"), value: "100-150" },
        { label: t("map.price150To200"), value: "150-200" },
        { label: t("map.price200To300"), value: "200-300" },
        { label: t("map.priceAbove300"), value: "300以上" },
      ],
    },
  ],
  room: [
    {
      title: t("map.room"),
      options: [
        { label: t("map.roomOne"), value: "roomOne" },
        { label: t("map.roomTwo"), value: "roomTwo" },
        { label: t("map.roomThree"), value: "roomThree" },
        { label: t("map.roomfour"), value: "roomfour" },
        { label: t("map.roomfive"), value: "roomfive" },
        { label: t("map.roomFiveAbove"), value: "roomFiveAbove" },
      ],
    },
  ],
  area: [
    {
      title: t("map.areaUnit"),
      options: [
        { label: t("map.areaUnder60"), value: "areaUnder60" },
        { label: t("map.area60To90"), value: "area60To90" },
        { label: t("map.area90To120"), value: "area90To120" },
        { label: t("map.area120To140"), value: "area120To140" },
        { label: t("map.area140To200"), value: "area140To200" },
        { label: t("map.area200To300"), value: "area200To300" },
        { label: t("map.area300Above"), value: "area300Above" },
      ],
    },
  ],
  more: [
    {
      title: t("map.feature"),
      options: [
        { label: t("map.mustSee"), value: "mustSee" },
        { label: t("map.fullFiveYears"), value: "fullFiveYears" },
        { label: t("map.fullTwoYears"), value: "fullTwoYears" },
        { label: t("map.nearSubway"), value: "nearSubway" },
        { label: t("map.vrHouse"), value: "vrHouse" },
        { label: t("map.vrDecoration"), value: "vrDecoration" },
        { label: t("map.newSevenDays"), value: "newSevenDays" },
        { label: t("map.anytimeView"), value: "anytimeView" },
        { label: t("map.niceView"), value: "niceView" },
      ],
    },
    {
      title: t("map.direction"),
      options: [
        { label: t("map.northSouth"), value: "northSouth" },
        { label: t("map.southFacing"), value: "southFacing" },
        { label: t("map.eastFacing"), value: "eastFacing" },
        { label: t("map.northFacing"), value: "northFacing" },
        { label: t("map.westFacing"), value: "westFacing" },
      ],
    },
    {
      title: t("map.floor"),
      options: [
        { label: t("map.lowFloor"), value: "lowFloor" },
        { label: t("map.midFloor"), value: "midFloor" },
        { label: t("map.highFloor"), value: "highFloor" },
      ],
    },
    {
      title: t("map.buildingAge"),
      options: [
        { label: t("map.within5Years"), value: "within5Years" },
        { label: t("map.within10Years"), value: "within10Years" },
        { label: t("map.within15Years"), value: "within15Years" },
        { label: t("map.within20Years"), value: "within20Years" },
        { label: t("map.over20Years"), value: "over20Years" },
      ],
    },
    {
      title: t("map.decoration"),
      options: [
        { label: t("map.fineDecoration"), value: "fineDecoration" },
        { label: t("map.ordinaryDecoration"), value: "ordinaryDecoration" },
        { label: t("map.roughHouse"), value: "roughHouse" },
      ],
    },
    {
      title: t("map.purpose"),
      options: [
        { label: t("map.ordinaryResidence"), value: "ordinaryResidence" },
        { label: t("map.commercial"), value: "commercial" },
        { label: t("map.villa"), value: "villa" },
        { label: t("map.courtyardHouse"), value: "courtyardHouse" },
        { label: t("map.parkingSpace"), value: "parkingSpace" },
        { label: t("map.other"), value: "other" },
      ],
    },
    {
      title: t("map.elevator"),
      options: [
        { label: t("map.withElevator"), value: "withElevator" },
        { label: t("map.withoutElevator"), value: "withoutElevator" },
      ],
    },
    {
      title: t("map.heating"),
      options: [
        { label: t("map.centralHeating"), value: "centralHeating" },
        { label: t("map.selfHeating"), value: "selfHeating" },
      ],
    },
    {
      title: t("map.ownership"),
      options: [
        { label: t("map.commercialHouse"), value: "commercialHouse" },
        { label: t("map.publicHouse"), value: "publicHouse" },
        { label: t("map.affordableHouse"), value: "affordableHouse" },
        { label: t("map.otherOwnership"), value: "otherOwnership" },
      ],
    },
    {
      title: t("map.buildingType"),
      options: [
        { label: t("map.towerBuilding"), value: "towerBuilding" },
        { label: t("map.slabBuilding"), value: "slabBuilding" },
        { label: t("map.slabTowerCombined"), value: "slabTowerCombined" },
      ],
    },
  ],
};
