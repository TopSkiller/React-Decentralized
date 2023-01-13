import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  
} from "@mui/material";

interface props {
    img: string,
    date: string,
    content: string
}

const  GalleryStyle: React.FC<props> = ({img, date, content})=> {
  return (
    <Box>
        <Box
            component="img"
            src = {img}
        >
        </Box>
        <Box
            display="flex"
            pt="16px"
            pb="8px">
            <Typography
               sx={(theme) => ({
                fontSize: "13px",
                mr: "16px",
                color: "#16141A",
                fontWeight: "500"
               })}>
                {date}
            </Typography>
            <Typography
                fontSize="13px"
                sx={(theme) => ({
                    color: theme.palette.primary.dark,
                    fontWeight: "400"
                  })}>
                ANNOUNCEMENT
            </Typography>
        </Box>
        <Typography
        variant="h3"
        fontSize="20px"
        sx={(theme) => ({
            color: "#16141A",
           
            
            fontWeight: "500",
            
            lineHeight: "1.4",
          })}>
            {content}
        </Typography>
        
    </Box>
  );
}

export default GalleryStyle;