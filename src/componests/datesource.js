export var datajson1={
    entities: [
      {
        name: "T1I1 Trial",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "S1 Site",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },
      {
  
        name: "T1I2 Trial",
  
        type: "clinical-trial",
  
        properties: {
  
            stage: "Stage 2"
  
            }
  
    },
  
    {
  
        name: "S2 Site",
  
        type: "Site-Lab",
  
        properties: {
  
            address: "2 Main St"
  
        }
  
    }
      // Add more entities as needed
    ],
    levels: [
      {
        seq: 1,
        entities: [
          {
            name: "T1I1 Trial",
          },
          // Add more entities to the level as needed
        ],
      },
    ],
    connections: [
      {
        Start: "T1I1 Trial",
        End: "S1 Site",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "T1I2 Trial",
        End: "S2 Site",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "T1I1 Trial",
        End: "S2 Site",
        Type: "Association-Rect",
        Properties: {},
      },
      
      
      // Add more connections as needed
    ],
  }


  export var datajson2={
    entities: [
      {
        name: "T1",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "S1",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },

      {
        name: "S2",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },

      {
        name: "T2",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "T3",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "S3",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },
      {
        name: "S4",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },

  
       
      // Add more entities as needed
    ],
    levels: [
      {
        seq: 1,
        entities: [
          {
            name: "T1",
          },
          // Add more entities to the level as needed
        ],
      },
    ],
    connections: [
      {
        Start: "T1",
        End: "S1",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S1",
        End: "S2",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S2",
        End: "T1",
        Type: "Association-Rect",
        Properties: {},
      },

      {
        Start: "T1",
        End: "T2",
        Type: "Association-Rect",
        Properties: {},
      },

      {
        Start: "T2",
        End: "T3",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "T3",
        End: "S3",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S3",
        End: "S4",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S4",
        End: "T2",
        Type: "Association-Rect",
        Properties: {},
      },
      
     
      
      
      // Add more connections as needed
    ],
  }

  export var datajson3={
    entities: [
      {
        name: "T1",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
        iconUrl: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png", // Add the URL to your icon here

      },
      {
        name: "S1",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
        iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1enGeIndKOzgAYfRgd5toAbebx7ADJDx5w&usqp=CAU"
        
      },

      {
        name: "S2",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },

      {
        name: "T2",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "T3",
        type: "clinical-trial",
        properties: {
          stage: "Stage 1",
        },
      },
      {
        name: "S3",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },
      {
        name: "S4",
        type: "Site-Hospital",
        properties: {
          address: "1 Main St",
        },
      },

  
       
      // Add more entities as needed
    ],
    levels: [
      {
        seq: 1,
        entities: [
          {
            name: "T1",
          },
          // Add more entities to the level as needed
        ],
      },
    ],
    connections: [
      {
        Start: "T1",
        End: "S1",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S1",
        End: "S2",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S2",
        End: "T1",
        Type: "Association-Rect",
        Properties: {},
      },

      {
        Start: "T1",
        End: "T2",
        Type: "Association-Rect",
        Properties: {},
      },

      {
        Start: "T2",
        End: "T3",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "T3",
        End: "S3",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S3",
        End: "S4",
        Type: "Association-Rect",
        Properties: {},
      },
      {
        Start: "S4",
        End: "T2",
        Type: "Association-Rect",
        Properties: {},
      },
      
     
      
      
      // Add more connections as needed
    ],
  }

