import React,{useState} from 'react'

const FilterRrent = ({onPropType, onBhkType, onParking}) => {
    const [filters, setFilters] = useState({
        prop: "",
        bhk: "",
        park: "",
      });
      const handleInput = (field) => (event) => {
        const { value } = event.target;
    
        setFilters({
          ...filters,
          [field]: value,
        });
    
        switch (field) {
          case "prop":
            onPropType(value);
            break;
          case "bhk":
            onBhkType(value);
            break;
          case "park":
            onParking(value);
            break;
            default:
        break;
          
        }
      };
  return (
    <div>
        <form>
                <div class="container m-3">
                  <h5>Property Type</h5>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="prop"
                    value="Apartment"
                    id="flexCheckDefault"
                    onChange={handleInput("prop")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <p>Apartment</p>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="prop"
                    value="Independent House/Villa"
                    id="flexCheckChecked"
                    onChange={handleInput("prop")}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      <p>Independent House/Villa</p>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    name="prop"
                    value="Gate Community Villa"
                    id="flexCheckChecked"
                    onChange={handleInput("prop")}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      <p>Gate Community Villa</p>
                    </label>
                  </div>
                </div>
                <div class="container m-3">
                  <h5>BHK Type</h5>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    onChange={handleInput("bhk")}
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                     <p>1 BHK</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2">
                      <p>2 BHK</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    />
                    <label class="form-check-label" for="inlineCheckbox3">
                      <p>3 BHK</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    />
                    <label class="form-check-label" for="inlineCheckbox3">
                      <p>4 BHK</p>
                    </label>
                  </div>
                </div>
                <div class="container m-3">
                  <h5>Parking</h5>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                    <p>2 Wheeler</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2">
                     <p>4 Wheeler</p>
                    </label>
                  </div>
                </div>
                <div class="container m-3">
                  <h5>Furnishing</h5>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                     <p>Full</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2">
                     <p>Semi</p>
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    />
                    <label class="form-check-label" for="inlineCheckbox3">
                     <p>None</p>
                    </label>
                  </div>
                </div>
                <button class="btn">Filter</button>
              </form>
    </div>
  )
}

export default FilterRrent

