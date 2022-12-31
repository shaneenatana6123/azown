import React,{useState} from 'react'

const FilterPlot = ({onPropType, onBhkType, onParking ,onFurnish,onRrentRange}) => {
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
              <h5>OwnerShip</h5>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="1 BHK"
                onChange={handleInput("bhk")}
                />
                <label class="form-check-label" for="inlineCheckbox1">
                 <p>Freehold</p>
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
                  <p>Co-operative Security</p>
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
                  <p>Leasehold</p>
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
                  <p>Power of Attorney</p>
                </label>
              </div>
            </div>
            <div class="container m-3">
              <h5>Amenities</h5>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="car"
                onChange={handleInput("park")}

                />
                <label class="form-check-label" for="inlineCheckbox1">
                <p>Swimming Pool</p>
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
                 <p>Children Play Area</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="both"
                onChange={handleInput("park")}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                 <p>Club House</p>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="none"
                onChange={handleInput("park")}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                 <p>Park</p>
                </label>
              </div>
            </div>
           
            <div className='container m-3'>
            <label for="customRange2" class="form-label">Rent Range Rs. 0 to Rs. 10 Cr</label>
<input type="range" className="form-range"  style={{width:"80%"}} min="0" max="100000000" onChange={handleInput("range")} id="customRange2" />
            </div>
            {/* <button class="btn">Filter</button> */}
          </form>
</div>
  )
}

export default FilterPlot