package data.sevice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import data.dto.ShopDto;
import data.mapper.ShopMapper;

@Service
public class ShopService {
    @Autowired
    private ShopMapper shopMapper;

    public void insertShop(ShopDto dto){
        shopMapper.insertShop(dto);
    }
    public List<ShopDto> getShopDatas(){
        return shopMapper.getShopDatas();
    } 
}
