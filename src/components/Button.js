
"use server"
export async function Button(name,apiUrl) {
    try {
        console.log('guess', name);
        var res = await fetch(apiUrl.dataAge, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        var resGender = await fetch(apiUrl.dataGender, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        var resCountry = await fetch(apiUrl.dataCountry, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        const dataGender = await resGender.json();
        const dataCountry = await resCountry.json();
        if (data.name == name) {
            console.log('your age is', data.age);
        }
        else if (dataGender.name == name) {
            console.log('your gender is', dataGender.gender);
        }
        else if (dataCountry.name == name) {
            console.log('you country is', dataCountry.country)
        } else {
            console.log('Entered name is not found in our system')
        }

        console.log('ressssss', data)
    } catch (err) {
        console.log(err);
    }
return

}

export default Button;