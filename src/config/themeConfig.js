export const themeConfig = {
     BLUE: {
          token: {
               colorPrimary: "#4f46e5",
               borderRadius: 5,
               controlHeight: 36,
               fontFamily: "Poppins",
               marginLG: 20,
               fontSize: 12,
               colorLink: "#4f46e5", 
               colorText : "#333", 
          },
          components: {
               Layout: {
                    siderBg: "#4f46e5",
                    bodyBg: "transparent",
               },
               Segmented: {},
               Table: {
                    cellFontSize: 12,
                    cellPaddingBlock: 10,
                    headerBg: "#f8f8f8",
                    headerColor: "#747474",
                    borderColor: "#ebecf0",
               },
          },
     },
};