const mongoose = require('mongoose');
const { Schema } = mongoose;

const rrs_PropSchema = new Schema({
    userid:{
        type:String
    },
    handlerid:{
        type:String
    },
    is_active:{
      type:Boolean,
      default:true
    },
    like:{
        type:[]
    },
    lead:{
        type:[]
    },
    handlerIds:{
      type:[]
    },
    rrs_detail_description:{
        type:String
    },
    rrs_detail_app_type:{
        type:String
    },
    rrs_detail_bhk_type:{
        type:String
    },
    rrs_detail_floor :{
        type:String
    },
    rrs_detail_total_floor :{
        type:String
    },
    rrs_detail_floor_type :{
        type:String
    },
    rrs_detail_kitchen_type :{
        type:String
    },
    rrs_detail_prop_age :{
        type:String
    },
    rrs_detail_facing:{
        type:String
    },
    rrs_detail_builtup_area :{
        type:String
    },
    rrs_detail_carpet_area :{
        type:String
    },
    rrs_detail_furnishing :{
        type:String
    },
    rrs_detail_parking :{
        type:String
    },
    rrs_detail_bathroom :{
        type:String
    },
    rrs_detail_balcony:{
        type:String
    },
    rrs_detail_water_supply :{
        type:String
    },
    
    rrs_location_state:{
        type:String
    },
    rrs_location_city:{
        type:String
    },
    rrs_location_latitude:{
        type:String
    },
    rrs_location_longitude:{
        type:String
    },
    rrs_location_iframe:{
        type:String
    },
    
    rrs_resale_detail_exp_price:{
        type:String
    },
    rrs_resale_detail_maintenance:{
        type:String
    },
    rrs_resale_detail_available_from :{
        type:String
    },
    
    rrs_amenities_lift :{
        type:String,
        default:"false"
    },
    rrs_amenities_ac :{
        type:String,
        default:"false"
    },
    rrs_amenities_intercom :{
        type:String,
        default:"false"
    },
    rrs_amenities_children_play_area :{
        type:String,
        default:"false"
    },
    rrs_amenities_servant_room :{
        type:String,
        default:"false"
    },
    rrs_amenities_gas_pipeline :{
        type:String,
        default:"false"
    },
    rrs_amenities_rainwater_harvesting :{
        type:String,
        default:"false"
    },
    rrs_amenities_housekeepiing :{
        type:String,
        default:"false"
    },
    rrs_amenities_visitor_parking :{
        type:String,
        default:"false"
    },
    rrs_amenities_internet :{
        type:String,
        default:"false"
    },
    rrs_amenities_club_house :{
        type:String,
        default:"false"
    },
    rrs_amenities_swimming_pool :{
        type:String,
        default:"false"
    },
    rrs_amenities_fire_safety :{
        type:String,
        default:"false"
    },
    rrs_amenities_shopping_center :{
        type:String,
        default:"false"
    },
    rrs_amenities_park :{
        type:String,
        default:"false"
    },
    rrs_amenities_sewage_treatment :{
        type:String,
        default:"false"
    },
    rrs_amenities_power_backup :{
        type:String,
        default:"false"
    },
    rrs_amenities_gated_security :{
        type:String,
        default:"false"
    },
    rrs_amenities_gym :{
        type:String,
        default:"false"
    },
   
    images:{
        type:[]
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('rrs_prop', rrs_PropSchema);