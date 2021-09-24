const hero = {
    name:  "Bennett",
    species: "Nazar",
    age: "4000",
    specialAbility: "Time Manipulation",
    strengths: "Intelligence and Patience",
    weaknesses: "Naivity",

    introduction(){
        return console.log(`Our hero ${this.name} hails from the planet ${this.species}. The ${this.age} year old warrior specialises in ${this.specialAbility}.Although sometimes hindered by his ${this.weaknesses}, his ${this.strengths} make him a formidable force`)
    }, 
    }
    hero.introduction();
    

    const villain = {
        name:  "Luther",
        species: "Volton",
        age: "7500",
        specialAbility: "Mind Control",
        strengths: "Physical Power and his loyal army",
        weaknesses: "Arrogance",
    
        introduction(){
            return console.log(`Bennett's nemesis ${this.name} hails from the planet ${this.species}. At ${this.age} years old, he has ruled his planet for centrures with his ${this.specialAbility} abilities, also adied by his ${this.strengths}. His only identified weakness is his ${this.weaknesses}, which Bennett will have to try and use against him.`)
        }, 
        }
        villain.introduction();
        