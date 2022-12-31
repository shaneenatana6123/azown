import React,{useState} from 'react'

const FilterCsale = ({onPropType, onBhkType, onParking ,onFurnish,onRrentRange}) => {
    const [filters, setFilters] = useState({
        prop: [],
        bhk: [],
        park: [],
        furnish:[],
        range:100000
      });
      const handleInput = (field) => (event) => {
        const { value } = event.target;
        if (field==="bhk") {
            if (filters.bhk.includes(value)){
            filters.bhk = filters.bhk.filter(val=> val!==value)
            setFilters({...filters,[field]:filters.bhk })
            }
            else{
                filters.bhk.push(value)
                setFilters({...filters,[field]:filters.bhk })
            }
            
            
        }else if(field==="prop"){
            if (filters.prop.includes(value)){
                filters.prop = filters.prop.filter(val=> val!==value)
                setFilters({...filters,[field]:filters.prop })
                }
                else{
                    filters.prop.push(value)
                    setFilters({...filters,[field]:filters.prop })
                }

        }else if (field==="park"){
            if (filters.park.includes(value)){
                filters.park = filters.park.filter(val=> val!==value)
                setFilters({...filters,[field]:filters.park })
                }
                else{
                    filters.park.push(value)
                    setFilters({...filters,[field]:filters.park })
                }

        }else if (field ==="furnish"){
            if (filters.furnish.includes(value)){
                filters.furnish = filters.furnish.filter(val=> val!==value)
                setFilters({...filters,[field]:filters.furnish })
                }
                else{
                    filters.furnish.push(value)
                    setFilters({...filters,[field]:filters.furnish })
                }
        }else if (field==="range"){

            setFilters({...filters,[field]:value })
        }
    
    
        switch (field) {
          case "prop":
            onPropType(filters.prop);
            break;
          case "bhk":
            onBhkType(filters.bhk);
            break;
          case "park":
            onParking(filters.park);
            break;
            case "furnish":
            onFurnish(filters.furnish);
            break;
            case "range":
                onRrentRange(value);
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
                value="appartment"
                id="flexCheckDefault"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  <p>Office Space</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="independent"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Co-Working</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="independent"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Shop</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="independent"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Showroom</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="gated community villa"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Godown/Warehouse</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="gated community villa"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>IndustrialShed</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="gated community villa"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Industrial Building</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="gated community villa"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Othe Building</p>
                </label>
              </div>
              <div class="form-check">
                <input
                class="form-check-input"
                type="checkbox"
                name="prop"
                value="independent"
                id="flexCheckChecked"
                onChange={handleInput("prop")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <p>Restaurant/Cafe</p>
                </label>
              </div>
            </div>
            <div class="container m-3">
              <h5>Building Type</h5>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="1 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox1">
                 <p>Independent House</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="2 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  <p>Business Park</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="3 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  <p>Mall</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="4 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  <p>Standalone Building</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="4 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  <p>Independent Shop</p>
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
                value="car"
                onChange={handleInput("park")}

                />
                <label class="form-check-label" for="inlineCheckbox1">
                <p>Public</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="bike"
                onChange={handleInput("park")}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                 <p>Reserved</p>
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
                value="furnished"
                onChange={handleInput("furnish")}
                />
                <label class="form-check-label" for="inlineCheckbox1">
                 <p>Furnished</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="unfurnished"
                onChange={handleInput("furnish")}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                 <p>Unfurnished</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="semi furnished"
                onChange={handleInput("furnish")}
                />
                <label class="form-check-label" for="inlineCheckbox3">
                 <p>Semi Furnished</p>
                </label>
              </div>
            </div>
            <div className='container m-3'>
            <label for="customRange2" class="form-label">Rent Range Rs. 0 to Rs. 100  Cr</label>
<input type="range" className="form-range"  style={{width:"80%"}} min="0" max="1000000000" onChange={handleInput("range")} id="customRange2" />
            </div>
            {/* <button class="btn">Filter</button> */}
          </form>
</div>
  )
}

export default FilterCsale