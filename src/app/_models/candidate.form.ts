export let CandidateForm:
    Array<Object>=
    [
        {
            form: "Name and Address",
            fields: [

                {name: "firstName", placeholder: "First Name", required: true},
                {name: "lastName", placeholder: "Last Name", required: true},
                {name: "address", placeholder: "Address", required: false},
                {name: "city", placeholder: "City", required: false},
                {name: "state", placeholder: "State/Province", required: false},
                {name: "zip", placeholder: "ZIP Code", required: false}
            ]
        },
        {
            form: "Contact and Professional Info",
            fields: [
                {name: "email", placeholder:"Primary Email", required: true},
                {name: "email2", placeholder:"Secondary Email", required: false},
                {name: "mobile", placeholder:"Mobile Phone", required: false},
                {name: "phone", placeholder:"Home Phone", required: false},
                {name: "workPhone", placeholder:"Work Phone", required: false},
                {name: "occupation", placeholder:"Current Title", required: false}
            ]
        }
    ];
