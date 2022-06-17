package data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import data.dto.ShopDto;

@Mapper
public interface ShopMapper {

    public void insertShop(ShopDto dto); //저장
    public List<ShopDto> getShopDatas(); //리턴
    public ShopDto getData(int num);
    public void deleteShop(int num);
    public void updateShop(ShopDto dto);
}