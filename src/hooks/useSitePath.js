import { useCallback } from "react";
import { sitePathConfig } from "@config/sitePathConfig";

const useSitePath = () => {
     const getConfigValue = useCallback((key) => {
          return sitePathConfig[key];
     }, []);

     return getConfigValue;
};

export default useSitePath;