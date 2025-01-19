import FilterByCategory from "Components/Ui/FilterCards/Components/FilterByCategory";
import FilterByRate from "Components/Ui/FilterCards/Components/FilterByRate";
import FilterByTypeButton from "Components/Ui/FilterCards/Components/FilterByTypeButton";
import PriceFilter from "Components/Ui/FilterCards/Components/PriceFilter";
import FilterCards from "Components/Ui/FilterCards/FilterCards";
const FilterOffersCard = () => {
  const buttonText = ["فنادق", "رحلات", "مطاعم", "هدايا", "سيارات"];
  const checkboxLabels = [
    "الأقرب",
    "الأحدث",
    "الأقدم",
    "السعر الأعلى أولا",
    "السعر الأقل أولا"
  ];

  return (
    <div className="all-filter-info" data-aos="fade-left">
      <FilterCards>
        {/* ============= START FILTER BY TYPE ============== */}
        <FilterByTypeButton buttonCount={5} buttonLabels={buttonText} />
        {/* ============= END FILTER BY TYPE ============== */}
        <PriceFilter />
        {/* ============= START FILTER CATEGORY ============ */}
        <FilterByCategory
          checkboxCount={checkboxLabels.length}
          checkboxLabels={checkboxLabels}
        />
        {/* ============= END FILTER CATEGORY ============ */}
        {/* ============= START FILTER BY RATE ============ */}
        <FilterByRate />
        {/* ============= END FILTER BY RATE ============ */}
      </FilterCards>
    </div>
  );
};

export default FilterOffersCard;
