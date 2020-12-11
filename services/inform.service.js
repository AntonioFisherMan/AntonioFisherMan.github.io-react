let Inform = require('../models/inform.model')

class InformService {
    getInform(id) {
        if (id) return Inform.findOne({ userId: id })
        return Inform.find()
    }
    createInform(data) {
        const newInform = new Inform({
            inform: data.inform,
            isAddInform: data.isAddInform,
            userId: data.id,
        })
        return newInform.save()
    }
    updateInform(id, inform, image) {
     
            if (image) {
                return Inform.findOneAndUpdate({ userId: id }, { $set: { 'inform.userImage': image } }).exec(err=>{
                    return err
                })
            }
            return Inform.findOneAndUpdate({ userId: id }, { inform: inform })
    
        
    }
}

module.exports = new InformService()
